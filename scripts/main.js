//This is the js code that adds the servers:
Events.on(Trigger.update.class, () => {

//Example \/
  Vars.defaultServers.remove(ServerGroup("Modded Betamindy Server", ["185.86.230.102:25603"]));
  Vars.defaultServers.add(new ServerGroup("Modded Betamindy Server", ["185.86.230.102:25603"]));
  
  print("oh no");
  
  
//Dont mind the code after this:
  
});
