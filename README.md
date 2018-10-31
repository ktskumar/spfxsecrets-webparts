## SECRETS TO MASTER SHAREPOINT FRAMEWORK: spfxsecrets-webparts

This Repo contains the Webparts I have created for the demo session held on 27th Oct'18. Check out the below link to access the deck presented during my session.
[Presentation](https://1drv.ms/p/s!AgcLN_2yoeRIlAAeOmL9HobNrKXr)

### Final Output
![](https://raw.githubusercontent.com/ktskumar/spfxsecrets-webparts/master/Readme-Assets/Output.PNG)

### Building the code

```bash
git clone the repo
npm i
npm i -g gulp
gulp
```

This package produces the following:

* lib/* - intermediate-stage commonjs build artifacts
* dist/* - the bundled script, along with other resources
* deploy/* - all resources which should be uploaded to a CDN.

### Build options

gulp clean - TODO
gulp test - TODO
gulp serve - TODO
gulp bundle - TODO
gulp package-solution - TODO


## How to Use ##

Follow the below steps to use this sample,

- Download or clone this Repo
- Extract the downloaded file
- Navigate to the project folder, where you have extracted or forked
- Navigate to the folder path via terminal ( powershell or any command line tool)
- Run the below commands in terminal
  -  **npm install**
  -  **gulp serve**
- After successfull build, nvaigate to the woprkbench in SharePoint
- Add the below two webparts to the workbench and test it
  - **List Item Count Chart**

    ![](https://raw.githubusercontent.com/ktskumar/spfxsecrets-webparts/master/Readme-Assets/ListItemCountChart.PNG) 
  - **PnP React Controls Sample**

    ![](https://raw.githubusercontent.com/ktskumar/spfxsecrets-webparts/master/Readme-Assets/PnPReactControls.PNG)


*Cheers!*
- **Shantha Kumar T** ( **@ktskumar** )
- [ktskumar.com](http://www.ktskumar.com)

