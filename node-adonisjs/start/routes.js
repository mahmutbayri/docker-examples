'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route');

Route.on('/').render('welcome');

Route.get('/task', 'TaskController.index').as('task.index');
Route.get('/task/insert', 'TaskController.insert').as('task.insert');
Route.get('/task/edit/:id', 'TaskController.edit').as('task.edit');
Route.get('/task/:id', 'TaskController.show').as('task.show');

Route.put('/task/update/:id', 'TaskController.update').as('task.update');
Route.post('/task', 'TaskController.store').as('task.store');

Route.delete('/task/:id', 'TaskController.destroy').as('task.destroy');
