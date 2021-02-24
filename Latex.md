 $$F=ma \tag{1}$$
 
 
 $$
\begin{chemistry}
  set("rLenN",20)
  formula(L,R)
    {
      ring(,,H1=)
        {
          0: bond(r,=C) atom("O") ;
          3: atom("N") bond(r) atom("C",C,R) atom("H$_3$",L) ;
          4: bond(r,=C) atom("O") ;
          5: atom("N") bond(r) atom("CH$_3$",L) ;
          vertex(,1,4,H2=,5)
            {
              1: atom("N") bond(r) atom("C",C,L) atom("H$_3$",R) ;
              3: atom("N") ;
            } ;
        }
    }
\end{chemistry}
$$