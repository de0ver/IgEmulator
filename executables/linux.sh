src=$( cd -- "$( dirname -- "${BASH_SOURCE[0]}" )" &> /dev/null && pwd )
node $src/XmppServerTcp/index.js &
node $src/ComponentConference/index.js &
node $src/ComponentWFC/index.js &
node $src/Masterserver/index.js server_id="1" min_rank="1" max_rank="70" channel="pve" resource="pve_001" rank_group="all" bootstrap="" ver="1.1.1.426" locale="ru" max_users="1000" bootstrap_name="" &
node $src/Masterserver/index.js server_id="101" min_rank="1" max_rank="10" channel="pvp_newbie" resource="pvp_newbie_001" rank_group="all" bootstrap="" ver="1.1.1.426" locale="ru" max_users="1000" bootstrap_name="" &
node $src/Masterserver/index.js server_id="201" min_rank="11" max_rank="25" channel="pvp_skilled" resource="pvp_skilled_001" rank_group="all" bootstrap="" ver="1.1.1.426" locale="ru" max_users="1000" bootstrap_name="" &
node $src/Masterserver/index.js server_id="301" min_rank="26" max_rank="70" channel="pvp_pro" resource="pvp_pro_001" rank_group="all" bootstrap="" ver="1.1.1.426" locale="ru" max_users="1000" bootstrap_name="" &
node $src/Tools/Cache/index.js modules="clan_list" version="all" locale="all" &
node $src/Tools/Cache/index.js modules="missions_pve" version="1.1.1.426" locale="ru" &
node $src/Tools/Cache/index.js modules="shop" version="1.1.1.426" locale="ru"
