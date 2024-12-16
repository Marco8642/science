repeat task.wait()
until game:IsLoaded()
wait(1)
      queueonteleport(game:HttpGet("https://raw.githubusercontent.com/Marco8642/science/refs/heads/main/bones", true))

    game:GetService("ReplicatedStorage").Remotes.QuestClaim:FireServer("survival5")
   wait(0.1)
   game.Players.LocalPlayer:Kick("Rejoining")
   game:GetService("TeleportService"):Teleport(game.PlaceId)
