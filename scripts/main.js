//H
var s = 1;
Events.on(Trigger.update.class, () => {
//PR after this part
  if (s == 1)
  {
    // Example
    Vars.defaultServers.add(new ServerGroup("Modded Betamindy Server", ["185.86.230.102:25603"]));
    //add your server by using the same code
    
    
    
    //servers end here
    s = 0;
  }
});
