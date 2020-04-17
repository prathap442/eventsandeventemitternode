# What is the Protocol?
  - A set of the rules that are used for communication between two entities and the two entities agree first on these protocols before they communicate .
  - In a server-server speaking also both of the agree to speak on the protocol over the internet
  like TCP-IP
  - There would like various ways in which the information would be communicated from one server to the other server by using various protocols like

  * SMTP: This is the protocol that is used for the sake of the email communication .
  * FTP: This is the protocol used during the process of the file transfer .
  * HTTP: This is the protocol for communication from the client to the server

# During the TCP/IP communication what happens?
    - during this communication over the line the stream of the packets would exist and would be split into the chunks and are meant to transmit over a stream called as the socket .
    For the general communication this socket would get opened and closed .


    - But for the Websockets the communication happens in such a way that the stream of the line the socket will contiously be opened and not closed .

# What are the ports and addresses in networks?
  - This is required when wanted to communicate with an entity that is connected over the internet and then 

  - When the programs are communicating let us say there goes an axios request from the backend to another server and this communication toe h another server whenre the nultiple programs would be running for example it wwould be like (fileprogram at 443,email program at 444, nodejs programs at 9090) .

  - When the program wants to communicate there would be patterns in which the communication would take place and this ways of communication as said would be by TCp/ip protocol way and this communication could still be categorised to have the
  ```
    HTTP
    FTP
    SMTP types
  ```

   - Here let us take a look at the HTTP way of the communication over the internet and tin proces of the communication there would be a first request that would get generatied from S1 to S2 and the request would have the 
   * HostAdderess,
   * COnnection status,
   * CONNEct: websiteaddress

   - THe response would indicate the mime type of the response being sent based on which the server s2 can parse the data  .



   # What is the Semantic Versioning?
   The Semantic Versioning consists of the following thing
   ```
             Major.Minor.Patch
     Version:  1  .  7  .  2 
   ```
   - The patch version would be made to get increament if the bug fixes have been done then the patch number would be increased .
   - The minor version update would take place based on the feature that we add .
   - The Major change in the version would take place like when an engine is being added to the application or a seperate service is being added to the application and there would bugs for it when launched.
   - For more notes on the Versioning please refere to the [semver.org]

  