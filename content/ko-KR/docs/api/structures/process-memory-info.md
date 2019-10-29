# ProcessMemoryInfo Object

* `residentSet` Integer *Linux* *Windows* - The amount of memory currently pinned to actual physical RAM in Kilobytes.
* `private` Integer - The amount of memory not shared by other processes, such as JS heap or HTML content in Kilobytes.
* `shared` Integer - 킬로바이트로 나타낸 프로세스 간에 공유되는 메모리의 양, 일반적으로 Electron 코드 자체에 의해 소비되는 메모리.