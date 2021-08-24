Protocol 
  set of rules on which two sides agreed on to use when communicating.
  
  
Port
  once a computer receives a packet, how it knows what program to send it to.
  when a program is setup on the OS to receive packet from particular port, it is said that the program is listening to that port.
  

lets say we have a web server on which nodeJS, FTP & Email programs are running. so whenever i make request to that server how will it know that it should go to node.
here port comes in picture.
every program running on web server listens to particular port. so if node is listening to port no. 3000 then we should request to http://localhost:3000
so whever we sent something to port 3000, it will listen by node.
node allows to specify port no whatever we want.



HTTP (Hyper Text Transfer Protocol)
  A set of rules for data being transferred on the web.
  
  
MIME (Multipurpose Internet Mail Extentions)
  a standard for specifying the TYPE of DATA being sent.
  
 
HTTP-Parser
   is a C program which is embedded in node JS which parses both request & response.
   
   parser extracts following info from HTTP messages
    1. Header fields & values
    2. content-Length
    3. Request Method
    4. Response status code
    5. Transfer-encoding
    6. HTTP version
    7. Request URL
    8. Message body
    
      
