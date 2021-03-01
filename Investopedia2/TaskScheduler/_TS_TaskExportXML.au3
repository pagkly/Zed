#Region ;**** Directives created by AutoIt3Wrapper_GUI ****
#AutoIt3Wrapper_Res_requestedExecutionLevel=asInvoker
#AutoIt3Wrapper_AU3Check_Stop_OnWarning=y
#AutoIt3Wrapper_AU3Check_Parameters=-d -w 1 -w 2 -w 3 -w 4 -w 5 -w 6 -w 7
#EndRegion ;**** Directives created by AutoIt3Wrapper_GUI ****

#include <TaskScheduler.au3>

; *****************************************************************************
; Make sure the needed folders/tasks exist
; *****************************************************************************
If MsgBox(BitOR($MB_ICONQUESTION, $MB_YESNO, $MB_DEFBUTTON2), "_TS_TaskExportXML", _
		"Please make sure you have created folder '\test' and run _TS_WrapperDateTime.au3 in advance so the needed tasks exist!" & @CRLF & @CRLF & "Do you want to continue?") <> $IDYES Then Exit

; *****************************************************************************
; Connect to the Task Scheduler Service
; *****************************************************************************
Global $oService = _TS_Open()
If @error <> 0 Then Exit MsgBox($MB_ICONERROR, "Task Scheduler UDF", "Error connecting to the Task Scheduler Service. @error = " & @error & ", @extended = " & @extended & @CRLF & @CRLF & _TS_ErrorText(@error))

; *****************************************************************************
; Connect to a single Task and export as XML to an array
; *****************************************************************************
Global $vResult = _TS_TaskExportXML($oService, "\Test\Test_Daily")
If @error Then
	MsgBox($MB_ICONERROR, "_TS_TaskExportXML", "Returned @error=" & @error & ", @extended=" & @extended & @CRLF & @CRLF & _TS_ErrorText(@error))
Else
	_ArrayDisplay($vResult, "_TS_TaskExportXML")
EndIf

; *****************************************************************************
; Connect to a single Task and export as XML to a file
; *****************************************************************************
$vResult = _TS_TaskExportXML($oService, "\Test\Test_Daily", @SCRIPTDIR & "\Test_Daily.XML")
If @error Then
	MsgBox($MB_ICONERROR, "_TS_TaskExportXML", "Returned @error=" & @error & ", @extended=" & @extended & @CRLF & @CRLF & _TS_ErrorText(@error))
Else
	MsgBox($MB_ICONINFORMATION, "_TS_TaskExportXML", "Task successfully exported to the specified file!")
EndIf

_TS_Close()