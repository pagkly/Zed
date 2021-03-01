#Region ;**** Directives created by AutoIt3Wrapper_GUI ****
#AutoIt3Wrapper_Res_requestedExecutionLevel=asInvoker
#AutoIt3Wrapper_AU3Check_Stop_OnWarning=y
#AutoIt3Wrapper_AU3Check_Parameters=-d -w 1 -w 2 -w 3 -w 4 -w 5 -w 6 -w 7
#EndRegion ;**** Directives created by AutoIt3Wrapper_GUI ****

#include <TaskScheduler.au3>
#include <Array.au3>

; *****************************************************************************
; Connect to the Task Scheduler Service
; *****************************************************************************
Global $oService = _TS_Open()
If @error <> 0 Then Exit MsgBox($MB_ICONERROR, "Task Scheduler UDF", "Error connecting to the Task Scheduler Service. @error = " & @error & ", @extended = " & @extended & @CRLF & @CRLF & _TS_ErrorText(@error))

; *****************************************************************************
; Check if a folder exists
; *****************************************************************************
Global $sFolder = "\Microsoft\Windows\.Net Framework"
Global $iExists = _TS_FolderExists($oService, $sFolder)
If Not @error Then
	MsgBox($MB_ICONINFORMATION, "_TS_FolderExists", "Checked folder: " & $sFolder & @CRLF & "Exists: " & $iExists)
Else
	MsgBox($MB_ICONERROR, "_TS_FolderExists", "Returned @error=" & @error & ", @extended=" & @extended & @CRLF & @CRLF & _TS_ErrorText(@error))
EndIf
_TS_Close()
