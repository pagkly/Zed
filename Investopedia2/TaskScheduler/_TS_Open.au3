#Region ;**** Directives created by AutoIt3Wrapper_GUI ****
#AutoIt3Wrapper_Res_requestedExecutionLevel=asInvoker
#AutoIt3Wrapper_AU3Check_Stop_OnWarning=y
#AutoIt3Wrapper_AU3Check_Parameters=-d -w 1 -w 2 -w 3 -w 4 -w 5 -w 6 -w 7
#EndRegion ;**** Directives created by AutoIt3Wrapper_GUI ****

#include <TaskScheduler.au3>
_TS_ErrorNotify(2)
Global $aTasks, $oService, $sComputer = "", $sUser = "", $sDomain = "", $sPassword = ""
$sComputer = InputBox("_TS_Open", "Please enter the Computer you want to connect to." & @CRLF & _
		"This is either the computer name when in AD or the IP-address if not." & @CRLF & "If set to '*' you connect to the local computer!", "", "", 450, 150)
If @error Then Exit
If $sComputer = "*" Then $sComputer = @ComputerName
$sUser = InputBox("_TS_Open", "Please enter the UserId you want to use to connect to the specified computer! Use one of the following:" & @CRLF & _
		"* AD user which is in the local Administrators group on that computer, via domain or local group, or directly. Use AD computer name." & @CRLF & _
		"* Local user (Administrator) which is NOT an AD user, and is in the local Administrators group on that computer, via local group, or directly. Use AD computer name." & @CRLF & _
		"* Non-domain computer where the entered local user (Administrator) is in the local Administrators group on that computer. Use IP address or DNS name to connect.", "", "", 850, 170)
If @error Then Exit
$sDomain = InputBox("_TS_Open", "Please enter the Domain of the entered UserId!" & @CRLF & _
		"Enter the domain name when using an AD user and '.' if using a local user.", "", "", 450, 150)
If @error Then Exit
$sPassword = InputBox("_TS_Open", "Please enter the Password for the UserId!", "", "*", 450, 150)
If @error Then Exit
$oService = _TS_Open($sComputer, $sUser, $sDomain, $sPassword)
If @error Then Exit MsgBox($MB_ICONERROR, "_TS_Open", "_TS_Open returned @error=" & @error & ", @extended=" & @extended & @CRLF & @CRLF & _TS_ErrorText(@error))
$aTasks = _TS_TaskList($oService)
If @error Then Exit MsgBox($MB_ICONERROR, "_TS_Open", "_TS_TaskList returned @error=" & @error & ", @extended=" & @extended & @CRLF & @CRLF & _TS_ErrorText(@error))
_ArrayDisplay($aTasks)
_TS_Close()
