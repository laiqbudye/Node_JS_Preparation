NPM - node pkg manager
npm is bundled with node js which means when you install node js npm comes automatically with it.
it is a default pkg manager for node js
it is completely written in js

pkg mgmt system-
  software that automates installing & updating pkgs.
  so whatever pkgs we install or update will be done by this system.
  
 
Versioning:-
  specifying what version of this code is
  e.g 1.1.1  (consider this as current version of app)
  
verion is based on this:- Major.Minor.Patch

Patch - when we fix any bug or something we increment this  (1.1.2)
Minor - when we add small new feature, increment this (1.2.0)
Major - when we add some big feature, or complete change of look n feel of our app then increment this (2.0.0)

here, number means something which is why it is called as Semantic Versioning.
  

When we create a new app then we can create a package.json using npm init command.



to download any pkg 
    npm install <pkg_name> --save   // --save will add an entry of that pkg under dependencies object

    npm install <pkg_name> --save-dev    // -dev specifies that this is a developer dependency, it will add this pkg under devDependencies object



there are some special characters gets added before the pkg version,
    e.g 
      dependencies: {
        moment: "^2.10.6"
      }

    ^ - whenever new version of moment releases with PATCH or MINOR version update, it will automatically dwnload that. it wont dwnload on MAJOR update.
    
    ~ - it will get updated only when PATCH updates. no on MAJOR OR MINOR update
  
