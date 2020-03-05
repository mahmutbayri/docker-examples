<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>

<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jstl/core" %>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Task List</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
          integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
</head>
<body>
<br/>
<br/>
<div class="container">
    <h1>Employees List</h1>
    <table class="table">
        <thead>
        <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Salary</th>
            <th>Designation</th>
            <th>Edit</th>
            <th>Delete</th>
        </tr>
        </thead>
        <thead>
        <c:forEach var="emp" items="${list}">
            <tr>
                <td><c:out value="${emp.id}"/></td>
                <td><c:out value="${emp.name}"/></td>
                <td><c:out value="${emp.salary}"/></td>
                <td><c:out value="${emp.designation}"/></td>
                <td><a class="btn btn-warning" href="edit/<c:out value="${emp.id}" />">Edit</a></td>
                <td><a class="btn btn-danger" href="delete/<c:out value="${emp.id}" />">Delete</a></td>
            </tr>
        </c:forEach>
        </thead>
    </table>
    <br/>
    <a href="create" class="btn btn-primary">Add New Employee</a>
</div>
</body>
</html>