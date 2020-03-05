package com.mahmut.spring;

import org.springframework.stereotype.Controller;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.ui.Model;

import java.util.List;

@Controller
public class EmployeeController {

    @Autowired
    EmployeeRepository employeeRepository;

    @RequestMapping("/index")
    public String index(Model m) {
        List<Employee> list = employeeRepository.getAll();
        m.addAttribute("list", list);
        return "index";
    }

    @RequestMapping("/create")
    public String create(Model m) {
        m.addAttribute("command", new Employee());
        return "create";
    }

    @RequestMapping(value = "/delete/{id}", method = RequestMethod.GET)
    public String delete(@PathVariable int id) {
        employeeRepository.delete(id);
        return "redirect:/index";
    }

    @RequestMapping(value = "/edit/{id}")
    public String edit(@PathVariable int id, Model m) {
        Employee emp = employeeRepository.getEmpById(id);
        m.addAttribute("command", emp);
        return "edit";
    }

    @RequestMapping(value = "/create", method = RequestMethod.POST)
    public String save(@ModelAttribute("emp") Employee emp) {
        employeeRepository.save(emp);
        return "redirect:/index";
    }

    @PostMapping(value = "/update")
    public String update(@RequestParam("name") String name, @ModelAttribute("emp") Employee emp) {

        System.out.println("Update name:" +name);

        employeeRepository.update(emp);
        return "redirect:/index";
    }
}
