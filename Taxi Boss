-- Gui to Lua
-- Version: 3.2

-- Instances:

local ScreenGui = Instance.new("ScreenGui")
local Frame = Instance.new("Frame")
local UICorner = Instance.new("UICorner")
local TextLabel = Instance.new("TextLabel")
local UICorner_2 = Instance.new("UICorner")
local TextLabel_2 = Instance.new("TextLabel")
local TextButton = Instance.new("TextButton")
local UICorner_3 = Instance.new("UICorner")

--Properties:

ScreenGui.Parent = game:GetService("CoreGui")
ScreenGui.ZIndexBehavior = Enum.ZIndexBehavior.Sibling

Frame.Parent = ScreenGui
Frame.AnchorPoint = Vector2.new(0.200000003, 0.200000003)
Frame.BackgroundColor3 = Color3.fromRGB(40, 40, 40)
Frame.BackgroundTransparency = 0.250
Frame.BorderColor3 = Color3.fromRGB(0, 0, 0)
Frame.BorderSizePixel = 0
Frame.ClipsDescendants = true
Frame.Position = UDim2.new(0.37719968, 0, 0.289203078, 0)
Frame.Size = UDim2.new(0, 400, 0, 259)

UICorner.Parent = Frame

TextLabel.Parent = Frame
TextLabel.BackgroundColor3 = Color3.fromRGB(40, 40, 40)
TextLabel.BackgroundTransparency = 1.000
TextLabel.BorderColor3 = Color3.fromRGB(0, 0, 0)
TextLabel.BorderSizePixel = 0
TextLabel.Size = UDim2.new(0, 400, 0, 50)
TextLabel.Font = Enum.Font.FredokaOne
TextLabel.Text = "Disclaimer"
TextLabel.TextColor3 = Color3.fromRGB(255, 255, 255)
TextLabel.TextSize = 43.000
TextLabel.TextWrapped = true

UICorner_2.Parent = TextLabel

TextLabel_2.Parent = Frame
TextLabel_2.BackgroundColor3 = Color3.fromRGB(255, 255, 255)
TextLabel_2.BackgroundTransparency = 1.000
TextLabel_2.BorderColor3 = Color3.fromRGB(0, 0, 0)
TextLabel_2.Position = UDim2.new(0.147499993, 0, 0.250965238, 0)
TextLabel_2.Size = UDim2.new(0, 282, 0, 109)
TextLabel_2.Font = Enum.Font.FredokaOne
TextLabel_2.Text = "Use script at  your  own risk i am not responsible for any accounts banned using my script. Note always exploit in private servers!"
TextLabel_2.TextColor3 = Color3.fromRGB(255, 255, 255)
TextLabel_2.TextSize = 20.000
TextLabel_2.TextWrapped = true
TextLabel_2.TextXAlignment = Enum.TextXAlignment.Left

TextButton.Parent = Frame
TextButton.BackgroundColor3 = Color3.fromRGB(40, 40, 40)
TextButton.BackgroundTransparency = 0.550
TextButton.BorderColor3 = Color3.fromRGB(0, 0, 0)
TextButton.BorderSizePixel = 0
TextButton.Position = UDim2.new(0.282499999, 0, 0.745173752, 0)
TextButton.Size = UDim2.new(0, 157, 0, 43)
TextButton.Font = Enum.Font.FredokaOne
TextButton.Text = "Okay"
TextButton.TextColor3 = Color3.fromRGB(255, 255, 255)
TextButton.TextSize = 22.000

UICorner_3.Parent = TextButton

-- Scripts:

local function WSDES_fake_script() -- TextButton.LocalScript 
	local script = Instance.new('LocalScript', TextButton)

	local button = script.Parent
	local frame = button.Parent
	button.MouseButton1Down:Connect(function()
		frame:TweenPosition(UDim2.new(0,500,2,0),Enum.EasingDirection.InOut,Enum.EasingStyle.Quart,5)
		task.wait(3)
	frame.Parent:Destroy()
		loadstring(game:HttpGet("https://raw.githubusercontent.com/Marco8642/science/main/taxi%20boss%20main"))()
	end)
	
end
coroutine.wrap(WSDES_fake_script)()
