# Llibreria-xarxes-neuronals

Què és això?

Aquests arxius formen part d'un programa: una Xarxa neuronal artificial.

**Sobre la Xarxa Neuronal Artificial:**

Aquest programa és una xarxa neuronal, creada amb javaScript. En iniciar-se, tria un color aleatori, i intenta endevinar si és un color clar o fosc, a partir dels principis de les xarxes neuronals. Al funcionar amb aprenentatge supervisat, si s'equivoca al dir el resultat, tu pots dir-li, i s'entrenarà; el que permetrà augmentar la possibilitat d'encertar el resultat més endavant. Després de molts exemples d'entrenament, hauria de començar a encertar un gran percentatge de les vegades.


**Sobre els arxius:**
1. **Carpeta: P5.js:** P5.js és una llibreria de JavasCript que et permet implementar les funcions de [Processing](https://processing.org/) en el navegador. Podeu consultar més informació a [la seva pàgina oficial](https://p5js.org/)

2. **Index.HTML:** HTML és un llenguatge de programació que et permet crear pàgines web. L'arxiu *index.HTML* és l'arxiu que s'ha d'executar per iniciar la xarxa neuronal artificial. Com a aplicació per defecte s'utilitza el navegador web predeterminat. També és l'arxiu que s'encarrega d'executar els programes i que la pàgina web funcioni.

3. **Matrix.js:** Les xarxes neuronals, per la seva complexitat, utilitzen matrius. *Matrix.js* és una llibreria a on hi ha les funcions bàsiques de les matrius compoden ser: suma, resta, multiplicació i translació. I altres funcions necessaries per fer funcionar la xarxa. Va ser creada per [Daniel Shiffman](https://github.com/shiffman), en el seu canal de YouTube [TheCodingTrain](https://www.youtube.com/watch?v=uSzGdfdOoG8&index=6&list=PLRqwX-V7Uu6aCibgK1PTWWu9by6XFdCfh)

4. **nn.js:** Aquest programa és l'encarregat de que la xarxa neuronal funcioni. En ell hi ha les funcions de *feedforward* i *backpropagation*, a més de totes les operacions de matrius. Aquest programa serveix per crear una xarxa neuronal com a objecte.

5. **Server.bat:** Aquest arxiu consta d'una línea de codi que serveix per crear un servidor local per poder executar la xarxa neuronal. Només funciona en ordinadors amb el sistema operatiu *Windows* i amb python v.3 o superior instal·lat.

6. **Sketch.js:** *Sketch.js* és el programa encargat de triar un color aleatori, preguntar a l'usuari si el color és clar o fosc i fer funcionar la xarxa neuronal enviant-li les senyals d'entrada.
