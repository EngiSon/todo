# Todo App

## Requirements
- [MSSQL LocalDB](https://docs.microsoft.com/en-us/sql/database-engine/configure-windows/sql-server-express-localdb?view=sql-server-ver15)
- [Node Package Manager](https://nodejs.org/en/)
- [Visual Studio](https://visualstudio.microsoft.com/) with .NET support
- [Microsoft SQL Server Management Studio](https://docs.microsoft.com/en-us/sql/ssms/download-sql-server-management-studio-ssms?view=sql-server-ver15)
---

## Cloning the repository
- **Using the terminal**

You can clone the repository by using the terminal of your choice, but this step requires that you have [git](https://git-scm.com/) installed on your computer. Just navigate to the  folder that you want the app in, then run the following command:

    git clone https://github.com/EngiSon/todo.git

- **Using the GitHub website to download the file**

You can also download the repository by going to the [project's website](https://github.com/EngiSon/todo), clicking on the green button titled **Code** and  then downloading the project as a ZIP file with the **Download ZIP** button.

## Setting up the application
- **Creating the database**

To make sure that you have a databse called **Todos** (having this same name is extremely important) on the localDB server, open Microsoft SQL Server Management Studio and connect to `(localdb)\MSSQLLocalDB` in the connection dialogue box using Windows Authentication.
After you are done with that and you have connected to localDB, right click on **Databases** and create a new database and call it **Todos**
- **Applying the migration to the database**

Navigate into the *todo-backend/TodoApi* folder in the downloaded (or cloned) project folder and open the **TodoApi** solution (.sln) file in there. After you have done that, make sure that all package dependencies are resolved in the project and then open the package manager console (PMC), by going to Tools/NuGet Package Manager. After you have done that, run the following command in the PMC:

    Update-Database

- **Installing node packages for the frontend**

This step requires you to have npm (Node package manager), so make sure that you have it installed.
Navigate into the *todo-client* folder in the project in the terminal of your choice and then run the following command:

    npm install

It might take a while, but after it has installed, everything should be ready to start using the app.

## Starting the application

To start the application, you have to start the backend first and make sure that it initializes before you would start the frontend app.

Open the **TodoApi** solution (.sln) and launch the app using either **F5** or the run button, this should launch the backend and it should now be ready to receiva calls.

To launch the frontend, navigate into the *todo-client* folder in the project and run the following command:

    npm start

After a few seconds, the web application should be up and running and now you can use the app to store your todos!

## Using the appliaction

The application is built to store your todos with data persistence (thanks to the backend), so you won't lose them even if you restart the browser or even your computer!

The app in itself is quite self explanatory, but here is a short rundown of what you can do and how to use it.

### Adding new todos

You can add new todos by filling out the form on the top of the screen. Whhen you have filled out each of the inputs, you can press the plus button next to the form to add it to the list. It is important that you give some data for each of the inputs, otherwise it won't even let you add it to the list of todos.

### Filtering todos

You can filter the list of todos by clicking on the filter buttons below the todo form. Using this will only show todos that have the same status as the selected status.

### The todo card

After you add a new todo, you will see a todo card show up with the title, description and date that you have given to them in the form.

The todo cards also have multiple buttons at the bottom, which you can hover over to make a tooltip show up with the button's function.

You can change the todo's status with the first four buttons (if the status you are trying to change it to is already the status it has, it will do nothing).

To move the todo up and down in the list, thus changing its priority, you can use the arrow buttons on the todo card, moving the card up and down respectively. Trying to move the todo card out of its boundaries won't work, so don't even try.

The final button that you can click on a todo card is the delete button, which will, as its name suggests, deletes the corresponding todo from the database. Make sure that you really want to delete the doto before doing so, because deleting it from the database will make it so you cannot get it back by any means.