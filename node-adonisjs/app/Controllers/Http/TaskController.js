'use strict';

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const taskModel = use('App/Models/Task');

class TaskController {

  /**
   * Task List
   */
  async index({view}) {
    const tasks = await taskModel.query().orderBy('id', 'desc').fetch();

    return view.render('tasks.list', {
      title: "Latest tasks",
      tasks: tasks.toJSON()
    });
  }

  /**
   * Insert Form
   */
  insert({view}) {
    return view.render('tasks.insert');
  }

  /**
   * Show a specific task
   */
  async show({request, view}) {
    const task = await taskModel.findOrFail(request.params.id);

    return view.render('tasks.show', {
      task: task.toJSON()
    });
  }

  /**
   *
   * Edit form for a specific task
   */
  async edit({request, view}) {
    const task = await taskModel.findOrFail(request.params.id);

    return view.render('tasks.edit', {
      task: task.toJSON()
    });
  }

  /**
   * Insert new task
   */
  async store({request, session, response}) {
    const task = new taskModel();
    task.title = request.input("title");
    await task.save();

    session.flash({notification: "Tasks Updated!"});

    return response.route('task.index')
  }

  /**
   * Update a specific task
   */
  async update({request, session, response}) {
    const task = await taskModel.findOrFail(request.params.id);
    task.title = request.input("title");
    await task.save();

    session.flash({notification: "Tasks Added!"});
    return response.route('task.show', { id: task.id })
  }

  /**
   * Delete a sepecific task
   */
  async destroy({request, session, response}) {
    const task = await taskModel.findOrFail(request.params.id);
    await task.delete();

    session.flash({notification: "Tasks deleted!"});
    return response.route('task.index')
  }
}

module.exports = TaskController;
