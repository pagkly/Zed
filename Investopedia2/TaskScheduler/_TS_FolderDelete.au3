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
; Delete a folder
; $sFolder has always to start at the root folder (means you have to
; specify all the folders from the root down even when they already exist)
; *****************************************************************************
Global $sFolder = "\Test-Level-0\Test-Level-1"
_TS_FolderDelete($oService, $sFolder)
If Not @error Then
	MsgBox($MB_ICONINFORMATION, "_TS_FolderDelete", "Folder: " & $sFolder & " successfully deleted!")
Else
	MsgBox($MB_ICONERROR, "_TS_FolderDelete", "Returned @error=" & @error & ", @extended=" & @extended & @CRLF & @CRLF & _TS_ErrorText(@error))
EndIf
_TS_Close()