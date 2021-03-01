#Region ;**** Directives created by AutoIt3Wrapper_GUI ****
#AutoIt3Wrapper_Res_requestedExecutionLevel=asInvoker
#AutoIt3Wrapper_AU3Check_Stop_OnWarning=y
#AutoIt3Wrapper_AU3Check_Parameters=-d -w 1 -w 2 -w 3 -w 4 -w 5 -w 6 -w 7
#EndRegion ;**** Directives created by AutoIt3Wrapper_GUI ****

#include <TaskScheduler.au3>

Global $sFolderName = "\Test", $sSourceTaskName = "Test-Task", $sTargetTaskName = "Test-Task-Copied"

; *****************************************************************************
; Make sure the needed folders/tasks exist
; *****************************************************************************
If MsgBox(BitOR($MB_ICONQUESTION, $MB_YESNO, $MB_DEFBUTTON2), "_TS_TaskImportXML", _
		"Please make sure you have created folder '\test' and run _TS_TaskCreate.au3 in advance so the needed task exists!" & @CRLF & @CRLF & "Do you want to continue?") <> $IDYES Then Exit

; *****************************************************************************
; Connect to the Task Scheduler Service
; *****************************************************************************
Global $oService = _TS_Open()
If @error <> 0 Then Exit MsgBox($MB_ICONERROR, "Task Scheduler UDF", "Error connecting to the Task Scheduler Service. @error = " & @error & ", @extended = " & @extended & @CRLF & @CRLF & _TS_ErrorText(@error))

; *****************************************************************************
; Connect to a single Task and export as XML to an array
; *****************************************************************************
Global $aResult = _TS_TaskExportXML($oService, $sFolderName & "\" & $sSourceTaskName)
If @error Then Exit MsgBox($MB_ICONERROR, "_TS_TaskExportXML", "Returned @error=" & @error & ", @extended=" & @extended & @CRLF & @CRLF & _TS_ErrorText(@error))
_ArrayDisplay($aResult, "_TS_TaskExportXML")

; *****************************************************************************
; Modify the XML (name of the task), import and create a new Task Definition
; *****************************************************************************
For $i = 0 To UBound($aResult) - 1
	If StringInStr($aResult[$i], "<URI>") Then
		$aResult[$i] = StringReplace($aResult[$i], $sSourceTaskName, $sTargetTaskName)
		ExitLoop
	EndIf
Next
Global $oTaskDefinition = _TS_TaskImportXML($oService, 2, $aResult)
If @error Then Exit MsgBox($MB_ICONERROR, "_TS_TaskImportXML", "Returned @error=" & @error & ", @extended=" & @extended & @CRLF & @CRLF & _TS_ErrorText(@error))
MsgBox($MB_ICONINFORMATION, "_TS_TaskImportXML", "Task Definition successfully created.")

; *****************************************************************************
; Register the new Task
; *****************************************************************************
Global $oTask = _TS_TaskRegister($oService, $sFolderName, $sTargetTaskName, $oTaskDefinition)
If @error Then Exit MsgBox($MB_ICONERROR, "_TS_TaskImportXML", "_TS_TaskRegister returned @error=" & @error & ", @extended=" & @extended & @CRLF & @CRLF & _TS_ErrorText(@error))
MsgBox($MB_ICONINFORMATION, "_TS_TaskImportXML", "Task '" & $oTask.Path & "' successfully created.")

_TS_Close()
