//H
var s = 1;
Events.on(Trigger.update.class, () => {
//PR after this part
  if (s == 1)
  {
    // Example
    Vars.defaultServers.add(new ServerGroup("Modded Betamindy Server", ["185.86.230.102:25603"]));
    //add your server by using the same code
    Vars.defaultServers.add(new ServerGroup("Modded-Unjown Server", ["braindustryserver.ddns.net:25647"]));
    Vars.defaultServers.add(new ServerGroup("2B2P", ["o7inc.ddns.net"]));
    Vars.defaultServers.add(new ServerGroup("THEDIMAS", ["fifr3.quackhost.uk:26160"]));
    Vars.defaultServers.add(new ServerGroup("Mr Keraye's Server", ["evmat.ddns.net"]));
    
    //servers end here
    s = 0;
  }
});
