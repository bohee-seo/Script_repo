Dim counter

Set AppContext=Browser("CreationTime:=0")												'Set the variable for what application (in this case the browser) we are acting upon
AIUtil.SetContext AppContext																'Tell the AI engine to point at the application

Do
	counter = counter + 1
	If counter >= 120 Then
		msgbox "The Search icon isn't disappearing like it should, check application"
		ExitScript
	End If
Loop Until AIUtil("search").Exist

AIUtil("search").Search "va01"

counter = 0
Do
	counter = counter + 1
	wait 1
	If counter >= 120 Then
		msgbox "The search returning the text Apps didn't display within " & counter & " attempts.  Check the application."
		ExitScript
	End If
Loop Until AIUtil.FindTextBlock("Apps").Exist

AIUtil.FindTextBlock("Create Sales Orders").Click

counter = 0
Do
	counter = counter + 1
	wait 1
	If counter >= 60 Then
		msgbox "The Create Sales Order text block isn't disappearing like it should, check application"
		ExitScript
	End If
Loop Until AIUtil.FindTextBlock("Order Type").Exist



