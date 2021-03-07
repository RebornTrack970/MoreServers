//I Suck at js so the servers get added and removed every tick. Pls someone help. aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa ;-;
var ohno = 0;
Events.on(Trigger.update.class, () => {
  //delets all servers
  
  if(ohno != 1)
  {
    var allServers = Vars.defaultServers;
    ohno = 1;
  }
  
  Vars.defaultServers.clear();
//Adds all servers.
//Example \/
  Vars.defaultServers.add(allServers);
  Vars.defaultServers.add(new ServerGroup("Modded Betamindy Server", ["185.86.230.102:25603"]));
  
  
  
  
//Dont mind the code after this:
  
});
