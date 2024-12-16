repeat task.wait()
until game:IsLoaded() and game:GetService("Players").LocalPlayer:findFirstChild("Bones")
wait(3)
      queueonteleport(game:HttpGet("https://raw.githubusercontent.com/Marco8642/science/refs/heads/main/bones", true))

    game:GetService("ReplicatedStorage").Remotes.QuestClaim:FireServer("survival5")
       local value = game:GetService("Players").LocalPlayer:findFirstChild("Bones").Value

   wait(0.2)
   game.Players.LocalPlayer:Kick("Bones: "..tostring(value))
   game:GetService("TeleportService"):Teleport(game.PlaceId)
