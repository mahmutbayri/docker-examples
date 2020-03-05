package com.mahmut.spring;

import org.springframework.jdbc.core.RowMapper;

import java.sql.*;

import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;

import java.util.List;

public class EmployeeRepository {

    JdbcTemplate template;

    public void setTemplate(JdbcTemplate template) {
        this.template = template;
    }

    public List<Employee> getAll(){
        return template.query("select * from employeetable",new RowMapper<Employee>(){
            public Employee mapRow(ResultSet rs, int row) throws SQLException {
                Employee e=new Employee();

                System.out.println("=============" + rs.getString(2));

                e.setId(rs.getInt(1));
                e.setName(rs.getString(2));
                e.setSalary(rs.getFloat(3));
                e.setDesignation(rs.getString(4));
                return e;
            }
        });
    }

    public int save(Employee p){
        String sql="insert into employeetable(name,salary,designation) values('"+p.getName()+"',"+p.getSalary()+",'"+p.getDesignation()+"')";
        return template.update(sql);
    }

    public int delete(int id){
        String sql="delete from employeetable where id="+id+"";
        return template.update(sql);
    }

    public Employee getEmpById(int id){
        String sql="select * from employeetable where id=?";
        return template.queryForObject(sql, new Object[]{id},new BeanPropertyRowMapper<Employee>(Employee.class));
    }

    public int update(Employee p){
        String sql="update employeetable set name='"+p.getName()+"', salary="+p.getSalary()+",designation='"+p.getDesignation()+"' where id="+p.getId()+"";
        return template.update(sql);
    }
}
