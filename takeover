local library = loadstring(game:HttpGet("https://pastebin.com/raw/PpMcEF8z", true))()
local example = library:CreateWindow({
  text = "Money"
})
example:AddBox("Vehicle Name", function(object, focus)
  if focus then
 
      _G.car = tostring(object.Text)
for i=1,1000 do
task.spawn(function()
game:GetService("ReplicatedStorage")["GAME - CarMng"]:InvokeServer(_G.car, false, true)
end)
end
wait(5)
game:GetService("TeleportService"):Teleport(game.PlaceId)
end
end)
