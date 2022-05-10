# Todo App

## Requirements
- [MSSQL LocalDB](https://docs.microsoft.com/en-us/sql/database-engine/configure-windows/sql-server-express-localdb?view=sql-server-ver15)
- [Node Package Manager](https://nodejs.org/en/)
- [Visual Studio](https://visualstudio.microsoft.com/) with .NET support
- [Microsoft SQL Server Management Studio](https://docs.microsoft.com/en-us/sql/ssms/download-sql-server-management-studio-ssms?view=sql-server-ver15)
### Setting up the application
To get the application working you first have to go through some simple steps.

**Cloning the repository**
- Using the terminal
You can clone the repository by using the terminal of your choice, but this step requires that you have [git](https://git-scm.com/) installed on your computer. Just navigate to the  folder that you want the app in, then run the following command:

    `git clone https://github.com/EngiSon/todo.git`

- Using the GitHub website to download the file
You can also download the repository by going to the [project's website](https://github.com/EngiSon/todo), clicking on the green button titled **Code** and  then downloading the project as a ZIP file with the **Download ZIP** button.

**Setting up the application**
- **Creating the database**

To make sure that you have a databse called **Todos** (having this same name is extremely important) on the localDB server, open Microsoft SQL Server Management Studio and connect to `(localdb)\MSSQLLocalDB` in the connection dialogue box using Windows Authentication.
After you are done with that and you have connected to localDB, right click on **Databases** and create a new database and call it **Todos**
- **Applying the migration to the database**

Navigate into the todo-backend/TodoApi folder in the downloaded (or cloned) project folder and open the solution file in there. After you have done that, make sure that all dependencies are resolved in the project and then open the package manager console (PMC), by going to Tools/NuGet Package Manager. After you have done that, run the following command in the PMC:

    `Update-Database`

- **Installing node packages for the frontend**

This step requires you to have npm (Node package manager), so make sure that you have it installed.
Navigate into the todo-client folder in the project in the terminal of your choice and then run the following command:

    `npm install`

It might take a while, but after it has installed, everything should be ready to start using the app.

**Starting the application**

To start the application, you have to start the backend first and make sure that it initializes before you would start the frontend app.

Open the **TodoApi** solution (.sln) and launch the app using either **F5** or the run button, this should launch the backend and it should now be ready to receiva calls.

To launch the frontend, navigate into the todo-client folder in the project and run the following command:

`npm start`

After a few seconds, the web application should be up and running and now you can use the app to store your todos!

### Using the appliaction

