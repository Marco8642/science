repeat task.wait()
until game:IsLoaded() and game:GetService("Players").LocalPlayer:findFirstChild("Bones")
wait(1)
      queueonteleport(game:HttpGet("https://raw.githubusercontent.com/Marco8642/science/refs/heads/main/bones", true))

    game:GetService("ReplicatedStorage").Remotes.QuestClaim:FireServer("survival5")
   wait(0.1)
   game.Players.LocalPlayer:Kick("Your bones:",game:GetService("Players").LocalPlayer:findFirstChild("Bones").Value)
   game:GetService("TeleportService"):Teleport(game.PlaceId)
