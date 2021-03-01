#Region ;**** Directives created by AutoIt3Wrapper_GUI ****
#AutoIt3Wrapper_Res_requestedExecutionLevel=asInvoker
#AutoIt3Wrapper_AU3Check_Stop_OnWarning=y
#AutoIt3Wrapper_AU3Check_Parameters=-d -w 1 -w 2 -w 3 -w 4 -w 5 -w 6 -w 7
#EndRegion ;**** Directives created by AutoIt3Wrapper_GUI ****

#include <TaskScheduler.au3>

Global $sSourceTask = "\Test\Test-Task"
Global $sTargetFolder = "\Test\TestFolder2"
Global $sTargetTask = "Test-Task2"

; *****************************************************************************
; Connect to the Task Scheduler Service
; *****************************************************************************
Global $oService = _TS_Open()
If @error <> 0 Then Exit MsgBox($MB_ICONERROR, "Task Scheduler UDF", "Error connecting to the Task Scheduler Service. @error = " & @error & ", @extended = " & @extended & @CRLF & @CRLF & _TS_ErrorText(@error))

; *****************************************************************************
; Copy the task and create the Task Definition
; *****************************************************************************
Global $oTaskDefinition = _TS_TaskCopy($oService, $sSourceTask)
If @error Then Exit MsgBox($MB_ICONERROR, "_TS_TaskCopy", "_TS_TaskCopy returned @error=" & @error & ", @extended=" & @extended & @CRLF & @CRLF & _TS_ErrorText(@error))

;******************************************************************************
; Create the target Folder
;******************************************************************************
_TS_FolderCreate($oService, $sTargetFolder)

; *****************************************************************************
; Register the new Task
; *****************************************************************************
Global $oTask = _TS_TaskRegister($oService, $sTargetFolder, $sTargetTask, $oTaskDefinition)
If @error Then Exit MsgBox($MB_ICONERROR, "_TS_TaskCopy", "_TS_TaskCopy returned @error=" & @error & ", @extended=" & @extended & @CRLF & @CRLF & _TS_ErrorText(@error))

_TS_Close()