if not game.Players.LocalPlayer:FindFirstChild("PlayerScripts") then
    game:GetService("TeleportService"):Teleport(13970285340,game.Players.LocalPlayer)
    queue_on_teleport[[
        game:GetService("TeleportService"):Teleport(13970285340,game.Players.LocalPlayer)
    
    ]]
    end
        warn("Anti afk running")
    game:GetService("Players").LocalPlayer.Idled:connect(function()
    warn("Anti afk ran")
    game:GetService("VirtualUser"):CaptureController()
    game:GetService("VirtualUser"):ClickButton2(Vector2.new())
    end)
    getfenv().grav = workspace.Gravity
    local library = loadstring(game:HttpGet("https://raw.githubusercontent.com/Marco8642/science/main/ui%20libs2"))()
    local example = library:CreateWindow({
      text = "Drag Project"
    })
    example:AddToggle("Auto Food Delivery", function(state)
    getfenv().money = (state and true or false)
    while getfenv().money do
    task.wait()
        repeat task.wait()
            local prox = game:GetService("Workspace").Jobs.DeliverySystem.Clicker:FindFirstChildOfClass("ProximityPrompt")
            if prox.Enabled == true then
            game.Players.LocalPlayer.Character.HumanoidRootPart.CFrame=prox.Parent.CFrame*CFrame.new(0,0,5)
            prox.RequiresLineOfSight = false
            prox.HoldDuration = 0
            wait(0.1)
            prox:InputHoldBegin()
            wait()
            prox:InputHoldEnd()
            end
        until game.Players.LocalPlayer.Backpack:FindFirstChildOfClass("Tool") or getfenv().money == false
            for i,v in pairs(workspace:GetDescendants()) do
                  if v.ClassName == "ProximityPrompt" and string.find(tostring(v.Parent.Name),"Prox") and v.Parent.Parent.Parent == workspace then
                    game.Players.LocalPlayer.Character.HumanoidRootPart.CFrame=v.Parent.CFrame
              v.Parent.CanCollide = false
              v.MaxActivationDistance = math.huge
              v.RequiresLineOfSight = false
              wait()
              repeat task.wait()
				if game.Players.LocalPlayer:DistanceFromCharacter(v.Parent.Position) < 10 then
                    v.HoldDuration = 0
                    v:InputHoldBegin()
                    wait()
                    v:InputHoldEnd()
				end
              until v.Parent == nil or v.Enabled == false or game.Players.LocalPlayer:DistanceFromCharacter(v.Parent.Position) > 10 or getfenv().money == false
                  end
                  end
                end
    end)
    example:AddToggle("Auto Farm", function(state)
    getfenv().test = (state and true or false)
    game.Players.LocalPlayer.Character.Head.Anchored = false
    spawn(function()
    while getfenv().test do
        pcall(function()
    task.wait()
    if getfenv().money ~= true then
    if game.Players.LocalPlayer.Character.Humanoid.SeatPart ~= nil then
    game.Players.LocalPlayer.Character.Humanoid.SeatPart.Parent.PrimaryPart.Velocity = game.Players.LocalPlayer.Character.Humanoid.SeatPart.Parent.PrimaryPart.CFrame.LookVector*400
    end
end
    end)
    end
    end)
    while getfenv().test do
       task.wait()
        pcall(function()
            if getfenv().money ~= true then
            if not game:GetService("Players").LocalPlayer.OwnedCars:FindFirstChild("HondeEX5") then
                game:GetService("ReplicatedStorage").KeteLoL.Beli:FireServer("HondeEX5")
                wait()
            end
    if game.Players.LocalPlayer.Character.Humanoid.Sit == true then
    local hum = game.Players.LocalPlayer.Character.Humanoid
    if not workspace:FindFirstChild("justapart") then
        local new = Instance.new("Part",workspace)
        new.Name = "justapart"
        new.Size = Vector3.new(10000,20,10000)
        new.Anchored = true
        new.Position = game.Players.LocalPlayer.Character.HumanoidRootPart.Position+Vector3.new(0,5000,0)
    end
    hum.SeatPart.Parent.PrimaryPart = hum.SeatPart
    hum.SeatPart.Throttle = 1
    hum.SeatPart.Parent:PivotTo(workspace.justapart.CFrame+Vector3.new(0,13,0))
    task.wait(1)
    game.Players.LocalPlayer.Character.Head.Anchored = getfenv().test
    
    elseif game.Players.LocalPlayer.Character.Humanoid.Sit == false and game:GetService("Players").LocalPlayer.OwnedCars:FindFirstChild("HondeEX5") then
        wait(1)
    game:GetService("ReplicatedStorage").KeteLoL.Letak:FireServer(game:GetService("Players").LocalPlayer.OwnedCars:FindFirstChild("HondeEX5").Name, "Civillian")
    wait(5)
    game:GetService("Workspace")["Folder"..game.Players.LocalPlayer.Name]:FindFirstChildOfClass("Model").DriveSeat:Sit(game.Players.LocalPlayer.Character.Humanoid)
    wait(1)
    end
end
    end)
    end
    end)
        local example = library:CreateWindow({
            text = "Teleports"
          })
          example:AddButton("Teleport to vehicle", function()
            pcall(function()
				if getfenv().money == false then
            game.Players.LocalPlayer.Character:MoveTo(game:GetService("Workspace"):FindFirstChild("Folder"..game.Players.LocalPlayer.Name):FindFirstChildOfClass("Model").DriveSeat.Position)
				end
          end)  
        end)
    
        example:AddButton("Teleport to Dealership", function()
            local spot = CFrame.new(-608.287292, 4.20762491, 154.133835, -0.972057402, 1.17043957e-08, 0.234743387, -1.35618947e-08, 1, -1.06019328e-07, -0.234743387, -1.06240435e-07, -0.972057402)+Vector3.new(0,620,0)
            if game.Players.LocalPlayer.Character.Humanoid.SeatPart ~= nil and getfenv().money == false then
                 game.Players.LocalPlayer.Character.Humanoid.SeatPart.Parent.PrimaryPart =  game.Players.LocalPlayer.Character.Humanoid.SeatPart
                game.Players.LocalPlayer.Character.Humanoid.SeatPart.Parent:PivotTo(spot)
            elseif  getfenv().money == false then
            game.Players.LocalPlayer.Character.HumanoidRootPart.CFrame= spot
            end
        end)
        example:AddButton("Teleport to Vip Houses", function()
            local spot = CFrame.new(-157.390686, 3.55590415, -162.619614, -0.999450982, -3.9576328e-08, -0.0331323668, -3.7554905e-08, 1, -6.16327611e-08, 0.0331323668, -6.03546439e-08, -0.999450982)+Vector3.new(0,620,0)
            if game.Players.LocalPlayer.Character.Humanoid.SeatPart ~= nil and getfenv().money == false then
               game.Players.LocalPlayer.Character.Humanoid.SeatPart.Parent.PrimaryPart =  game.Players.LocalPlayer.Character.Humanoid.SeatPart
                game.Players.LocalPlayer.Character.Humanoid.SeatPart.Parent:PivotTo(spot)
            elseif  getfenv().money == false then
            game.Players.LocalPlayer.Character.HumanoidRootPart.CFrame= spot
            end
        end)
        example:AddButton("Teleport to Drag race", function()
            local spot = CFrame.new(26.5487614, 3.54278731, -526.0625, -0.0196847972, 4.19225508e-08, 0.999806225, -5.75967327e-08, 1, -4.30646772e-08, -0.999806225, -5.84332938e-08, -0.0196847972)+Vector3.new(0,620,0)
            if game.Players.LocalPlayer.Character.Humanoid.SeatPart ~= nil and getfenv().money == false then
               game.Players.LocalPlayer.Character.Humanoid.SeatPart.Parent.PrimaryPart =  game.Players.LocalPlayer.Character.Humanoid.SeatPart
                game.Players.LocalPlayer.Character.Humanoid.SeatPart.Parent:PivotTo(spot)
            elseif  getfenv().money == false then
            game.Players.LocalPlayer.Character.HumanoidRootPart.CFrame= spot
            end
        end)
            example:AddButton("Teleport to foodpanda", function()
              local spot = CFrame.new(-0.0975782275, 3.70432806, -243.674194, 0.0824485049, -7.59362564e-08, 0.996595323, -8.9118295e-08, 1, 8.35684517e-08, -0.996595323, -9.57049764e-08, 0.0824485049)+Vector3.new(0,620,0)
    
			  if game.Players.LocalPlayer.Character.Humanoid.SeatPart ~= nil and getfenv().money == false then
              game.Players.LocalPlayer.Character.Humanoid.SeatPart.Parent.PrimaryPart =  game.Players.LocalPlayer.Character.Humanoid.SeatPart
                game.Players.LocalPlayer.Character.Humanoid.SeatPart.Parent:PivotTo(spot)
            elseif  getfenv().money == false then
            game.Players.LocalPlayer.Character.HumanoidRootPart.CFrame= spot
            end    
    end)
            example:AddButton("Teleport to Mount Kiara", function()
                local spot = CFrame.new(3969.83545, 3.55590558, -1198.41101, -0.920043468, 3.10609716e-09, 0.391816348, 1.42095935e-08, 1, 2.54388226e-08, -0.391816348, 2.89723729e-08, -0.920043468)+Vector3.new(0,620,0)
				if game.Players.LocalPlayer.Character.Humanoid.SeatPart ~= nil and getfenv().money == false then
             game.Players.LocalPlayer.Character.Humanoid.SeatPart.Parent.PrimaryPart =  game.Players.LocalPlayer.Character.Humanoid.SeatPart
                game.Players.LocalPlayer.Character.Humanoid.SeatPart.Parent:PivotTo(spot)
				elseif  getfenv().money == false then
            game.Players.LocalPlayer.Character.HumanoidRootPart.CFrame= spot
            end
    end)
     example:AddToggle("Click Teleport", function(state)
        getfenv().clickteleport = (state and true or false)
    if getfenv().clickteleport == true then
        local plr = game.Players.LocalPlayer
        local Mouse = plr:GetMouse()
        getfenv().run=Mouse.Button1Down:Connect(function()
        if game.Players.LocalPlayer.Character.Humanoid.SeatPart ~= nil then
     game.Players.LocalPlayer.Character.Humanoid.SeatPart.Parent.PrimaryPart =  game.Players.LocalPlayer.Character.Humanoid.SeatPart
    game.Players.LocalPlayer.Character.Humanoid.SeatPart.Parent:PivotTo(CFrame.new(Mouse.Hit.Position+Vector3.new(0,15,0)))
    else
        game.Players.LocalPlayer.Character:MoveTo(Mouse.Hit.Position)
        end
        end)
        elseif getfenv().clickteleport == false then
       getfenv().run:Disconnect()
        end
    end)
    local example = library:CreateWindow({
      text = "Misc"
    })
    example:AddLabel("Player Speed Changer",function()
    end)
    example:AddBox("Enter Speed Value", function(object, focus)
      if focus then
     
          getfenv().mood = tostring(object.Text)
      end
    end)
    example:AddToggle("Speed Enabler", function(state)
    getfenv().speedster = (state and true or false)
    while getfenv().speedster do
        task.wait()
        pcall(function()
        game.Players.LocalPlayer.Character.Humanoid.WalkSpeed = getfenv().mood
        end)
        end
    end)
    example:AddToggle("Infinite Jump", function(state)
    getfenv().infjump = (state and true or false)
    while getfenv().infjump do
        task.wait()
    if game.Players.LocalPlayer.Character.Humanoid.Jump == true then
    game.Players.LocalPlayer.Character.Humanoid:ChangeState(3)
    end
    end
    end)
    example:AddLabel("Gravity Changer",function()
    end)
    example:AddBox("Enter Gravity Value", function(object, focus)
      if focus then
     
          code = tonumber(object.Text)
          workspace.Gravity = code
      end
    end)      
    example:AddButton("reset gravity", function(state)
    workspace.Gravity = getfenv().grav
    end)
    local example = library:CreateWindow({
        text = "Misc"
      })
    example:AddButton("Skip Loading Screen", function(state)
    local cam = workspace.Camera
    cam.CameraSubject = game.Players.LocalPlayer.Character.Humanoid
    cam.CameraType = Enum.CameraType.Custom
    game.Players.LocalPlayer.CameraMaxZoomDistance = 20
    game:GetService("Players").LocalPlayer.PlayerGui.Loading:Destroy()
    end)
    example:AddButton("Join Sentul", function(state)
    writefile("dragprojectTphelper.txt","queue_on_teleport".."[[".."game"..".".."TeleportService"..":".."Teleport".."(13970285340"..",game.Players.LocalPlayer)".."]]")
    game:GetService("TeleportService"):Teleport(11568403922)
    wait()
    queue_on_teleport[[
    repeat task.wait()
    until game:IsLoaded()
    readfile("dragprojectTphelper.txt")
    game:GetService("TeleportService"):Teleport(13970285340,game.Players.LocalPlayer)
    ]]
    end)
