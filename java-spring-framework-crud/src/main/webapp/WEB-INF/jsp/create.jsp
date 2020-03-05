<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib uri="http://www.springframework.org/tags/form" prefix="form" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
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
    <h1>Add New Employee</h1>
    <form:form method="post" action="create">
    <table>
        <tr>
            <td>Name:</td>
            <td><form:input cssClass="form-control" path="name"/></td>
        </tr>
        <tr>
            <td>Salary:</td>
            <td><form:input  cssClass="form-control" path="salary"/></td>
        </tr>
        <tr>
            <td>Designation:</td>
            <td><form:input  cssClass="form-control" path="designation"/></td>
        </tr>
        <tr>
            <td></td>
            <td><input type="submit" value="Save"/></td>
        </tr>
    </table>
    </form:form>

</body>
</html>
