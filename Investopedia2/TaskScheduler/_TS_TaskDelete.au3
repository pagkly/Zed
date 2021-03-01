#Region ;**** Directives created by AutoIt3Wrapper_GUI ****
#AutoIt3Wrapper_Res_requestedExecutionLevel=asInvoker
#AutoIt3Wrapper_AU3Check_Stop_OnWarning=y
#AutoIt3Wrapper_AU3Check_Parameters=-d -w 1 -w 2 -w 3 -w 4 -w 5 -w 6 -w 7
#EndRegion ;**** Directives created by AutoIt3Wrapper_GUI ****

#include <TaskScheduler.au3>
#include <Array.au3>
If MsgBox($MB_ICONWARNING + $MB_YESNO, "_TS_TaskDelete", "Make sure you have run _TS_TaskCreate.au3 to create the task this function is going to delete!" & _
		@CRLF & @CRLF & "Do you want to continue?") = $IDNO Then Exit

; *****************************************************************************
; Connect to the Task Scheduler Service
; *****************************************************************************
Global $oService = _TS_Open()
If @error <> 0 Then Exit MsgBox($MB_ICONERROR, "Task Scheduler UDF", "Error connecting to the Task Scheduler Service. @error = " & @error & ", @extended = " & @extended & @CRLF & @CRLF & _TS_ErrorText(@error))

; *****************************************************************************
; Delete task "Test-Task" from folder "\Test"
; *****************************************************************************
Global $sTaskPath = "\Test\Test-Task"    ; Folder and name of the task to be deleted
_TS_TaskDelete($oService, $sTaskPath)
If Not @error Then
	MsgBox($MB_ICONINFORMATION, "_TS_TaskDelete", "Task '" & $sTaskPath & "' successfully deleted!")
Else
	MsgBox($MB_ICONERROR, "_TS_TaskDelete", "Returned @error=" & @error & ", @extended=" & @extended & @CRLF & @CRLF & _TS_ErrorText(@error))
EndIf
_TS_Close()
