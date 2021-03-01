#Region ;**** Directives created by AutoIt3Wrapper_GUI ****
#AutoIt3Wrapper_Res_requestedExecutionLevel=asInvoker
#AutoIt3Wrapper_AU3Check_Stop_OnWarning=y
#AutoIt3Wrapper_AU3Check_Parameters=-d -w 1 -w 2 -w 3 -w 4 -w 5 -w 6 -w 7
#EndRegion ;**** Directives created by AutoIt3Wrapper_GUI ****

#include-once
#include <TaskScheduler.au3>
#include <Array.au3>
AutoItSetOption("MustDeclareVars", 1)

; *****************************************************************************
; Connect to the Task Scheduler Service
; *****************************************************************************
Global $oService = _TS_Open()
If @error <> 0 Then Exit MsgBox($MB_ICONERROR, "Task Scheduler UDF", "Error connecting to the Task Scheduler Service. @error = " & @error & ", @extended = " & @extended & @CRLF & @CRLF & _TS_ErrorText(@error))

; *****************************************************************************
; List all tasks (starting in the root folder). Show hidden and disabled tasks.
; Ignore Microsoft folder. Display Task name, folder, last run time and number of missed runs.
; *****************************************************************************
Global $iProperties = 2^0 + 2^1 + 2^5 + 2^7
Global $aTasks = _TS_TaskList($oService, Default, 1, 1, 0, $iProperties, True)
If Not @error Then
	_ArrayDisplay($aTasks, "_TS_TaskList", "", 0, Default, _TS_TaskListHeader($iProperties))
Else
	MsgBox($MB_ICONERROR, "_TS_TaskList", "Returned @error=" & @error & ", @extended=" & @extended & @CRLF & @CRLF & _TS_ErrorText(@error))
EndIf

_TS_Close()