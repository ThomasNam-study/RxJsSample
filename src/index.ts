import {asapScheduler, from, Observable, of, range} from "rxjs";

let op1$ = new Observable((observer) => {
  console.log("[Begin subscribe function]")

  for (let i = 0; i < 10; i++)
  {
      observer.next(i);
  }

  observer.complete();
});

op1$.subscribe((n) => console.log(n));
op1$.subscribe({
    next: (n) => {
        console.log("sub2 = ", n)
    },
    complete: () => {
        console.log ("sub2 complete");
    },
    error: (e) => {
        console.error ("sub2 error", e);
    }
});

let printFunc = (n) => console.log(n);

op1$.subscribe((n) => console.log(n), (e) => console.error(e), () => console.log("Complete"));

of("n", "a", "m").subscribe((n) => console.log(n));
// of("n", "a", "m", asapScheduler).subscribe((n) => console.log(n));

range(1, 10).subscribe(printFunc);

from([10, 20, 30]).subscribe(printFunc);

from(new Promise(((resolve, reject) => {
    console.log("Promise1 function begin");
    setTimeout(() => resolve("Promise1 resolve"), 1000);
    console.log("Promise1 function end");
}))).subscribe(printFunc);
