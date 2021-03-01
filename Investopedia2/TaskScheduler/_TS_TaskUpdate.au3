#Region ;**** Directives created by AutoIt3Wrapper_GUI ****
#AutoIt3Wrapper_Res_requestedExecutionLevel=asInvoker
#AutoIt3Wrapper_AU3Check_Stop_OnWarning=y
#AutoIt3Wrapper_AU3Check_Parameters=-d -w 1 -w 2 -w 3 -w 4 -w 5 -w 6 -w 7
#EndRegion ;**** Directives created by AutoIt3Wrapper_GUI ****

#include <TaskScheduler.au3>

Global $sTaskName = "Test-Task"
Global $sTaskFolder = "\Test"
Global $sTask = $sTaskFolder & (($sTaskFolder = "\") ? ("") : ("\")) & $sTaskName
Global $oTask = Null
Global $oTaskDefinition = Null

; *****************************************************************************
; Connect to the Task Scheduler Service
; *****************************************************************************
Global $oService = _TS_Open()
If @error <> 0 Then Exit MsgBox($MB_ICONERROR, "Task Scheduler UDF", "Error connecting to the Task Scheduler Service. @error = " & @error & ", @extended = " & @extended & @CRLF & @CRLF & _TS_ErrorText(@error))

; *****************************************************************************
; Get Task Definition
; *****************************************************************************
$oTask = _TS_TaskGet($oService, $sTask)
If @error Then Exit MsgBox($MB_ICONERROR, "_TS_TaskUpdate", "_TS_TaskGet returned @error=" & @error & ", @extended=" & @extended & @CRLF & @CRLF & _TS_ErrorText(@error))
$oTaskDefinition = $oTask.Definition

; *****************************************************************************
; Check Triggers
; *****************************************************************************
MsgBox(0, "_TS_TaskUpdate", "Triggers Count before delete: " & $oTaskDefinition.Triggers.Count, 3)

; *****************************************************************************
; Delete all but the first trigger
; *****************************************************************************
For $i = $oTaskDefinition.Triggers.Count To 2 Step -1
    _TS_TriggerDelete($oTaskDefinition, $i)
    If @error Then Exit MsgBox($MB_ICONERROR, "_TS_TaskUpdate", "_TS_TriggerDelete returned @error=" & @error & ", @extended=" & @extended & @CRLF & @CRLF & _TS_ErrorText(@error))
Next

; *****************************************************************************
; Update the task
; *****************************************************************************
$oTask = _TS_TaskUpdate($oService, $oTask, $oTaskDefinition)
If @error Then Exit MsgBox($MB_ICONERROR, "_TS_TaskUpdate", "_TS_TaskUpdate returned @error=" & @error & ", @extended=" & @extended & @CRLF & @CRLF & _TS_ErrorText(@error))
MsgBox(0, "_TS_TaskUpdate", "Result of _TS_TaskUpdate: @error = " & @error & ", @extended = " & @extended, 3)

; *****************************************************************************
; Check Triggers
; *****************************************************************************
MsgBox(0, "_TS_TaskUpdate", "Triggers Count after delete: " & $oTaskDefinition.Triggers.Count)

_TS_Close()