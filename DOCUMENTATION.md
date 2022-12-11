# Challenge
Simple angular app that lets the user select a Datasource from a list an then displays the data associated with that datasource in a table below the list.

# How to run
Download the code and place it inside a new folder(from now on "Workspace"). Open the Angular cli and with cd command go to the recently created workspace. Run ng serve --open, the app should now be running on a browser tab.
Note: in some cases, if some packages are not installed, run npm install prior to the ng serve --open.
![image](https://user-images.githubusercontent.com/38087753/206923342-e6b54b3b-e539-4159-94da-a7c16d605c72.png)


# How to use
Select a Datasource from the list ![image](https://user-images.githubusercontent.com/38087753/206923376-c04b3769-7ec4-4a62-bb98-afebba917afe.png)

If no data is associated with that Datasource, the table is presented empty:


![image](https://user-images.githubusercontent.com/38087753/206923396-c86e6451-bcef-41c4-9d0e-d1fcf4c5786f.png)


On the contrary, if there's data asssociated, the table looks like this:![image](https://user-images.githubusercontent.com/38087753/206923414-a469339a-725b-4f1b-b808-6823e3c9c9bf.png)


To change the datasource simply pick another one from the list.


# Next steps
This app was my first interaction with angular(not Javascript/Typescript), i would have liked to implement some aspects of it in another way as i understand the way i did it is not the most efficient one. But i'm proud of the outcome for the time i had.

These are:    -Not have everything wrapped up in one component but use 2 for example and apply binding(Get the selected item from the list(parent) as input to the table(child)).
              -Populate the list options by reading the datasources directly from the files.
              -Use a dropdown list(select) to choose the datasource.
              -Stylize the table.
