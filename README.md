# Warface Server Emulator
Server emulator for older versions of the Warface game, from 04/12/2012 to 06/28/2017.
# Installation and launch
1. Download the emulator [Releases](https://github.com/ivanygames/igemulator/releases).
2. Launching the emulator 
***For Windows:***
	- `MongoDbStart.bat`;
	- `XmppServerTcp.bat`;
	- `ComponentConferenceStart.bat`;
	- `ComponentWFCStart.bat`;
	- `Masterserver(Ru)(1.15000.1392.22400)(pve_001)`;
	- `Masterserver(Ru)(1.15000.1392.22400)(pvp_pro_001).bat`;

 ***For Linux (with Proton/Wine):***

* Installing Docker, NodeJS:
	`pacman -S nodejs docker`
+ Create & Run Docker container with mongodb:
    `docker run -d --name mongodb -p 27017:27017 -v ../MasterServer/MongoDb/db:/data/db -v ../MasterServer/MongoDb/mongod.cfg:/etc/mongod.cfg mongo:4.2`

+ Run 
	- `node --tls-min-v1.0 ../XmppServerTcp/index.js`;
	- `node ../ComponentWFC/index.js`;
	- `node ../ComponentConference/index.js`;
	- `node ../Masterserver/index.js server_id="301" min_rank="26" max_rank="70" channel="pvp_pro" resource="pvp_pro_001" rank_group="all" bootstrap="" ver="" locale="ru" max_users="1000" bootstrap_name=""`;
	- `node ../Masterserver/index.js server_id="201" min_rank="11" max_rank="25" channel="pvp_skilled" resource="pvp_skilled_001" rank_group="all" bootstrap="" ver="" locale="ru" max_users="1000" bootstrap_name=""`;

4. Generating a token
`http://127.0.0.1:8080/settoken?id=1&token=12345&time=120000`.
5. Starting the game
***Windows:***
	`Game.exe -devmode -uid 1 -token 1.1.1.426~12345 +online_server 127.0.0.1 +online_server_port 5222 +online_check_certificate 0 +online_use_tls 1 +online_use_protect 0`.
 ***Linux (Proton/Wine):***
 Add Game.exe to Steam, in Properties set launch arguments:
	`-devmode -uid 1 -token 1.1.1.426~12345 +online_server 127.0.0.1 +online_server_port 5222 +online_check_certificate 0 +online_use_tls 1 +online_use_protect 0`

