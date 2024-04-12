# Ejercicio de Lógica de Programación: Encuentra el Número Perdido

## Descripción

Dado un conjunto de números enteros del 1 al N, donde N es un número impar mayor o igual a 3, todos los números están presentes dos veces, excepto uno. Tu tarea es encontrar ese número único.

---

## Ejemplo

Si tenemos el conjunto {1, 3, 2, 4, 2, 1, 3}, el número único es 4, ya que aparece solo una vez.

---

## Instrucciones

- Escribe un algoritmo en JavaScript o algún otro lenguaje para encontrar el número único en un conjunto dado.
- Utiliza estructuras de control de flujo, como bucles y condiciones, para implementar tu algoritmo.
- Asegúrate de manejar casos donde el conjunto de números sea válido (cumple con las condiciones descritas) y proporcione un resultado correcto.

---

## Preguntas para Resolver

### **¿Cómo abordaste el problema?**

Abordé el problema en primer lugar pensando en que debía realizar 2 funciones: una para encontrar el número único en el array y otra para verificar que, en caso de haber un número único, lo muestre en pantalla.

### **¿Qué estrategia utilizaste para identificar el número único?**

La estrategia que utilicé para identificar el número único es mediante el uso de dos bucles `for`, uno para recorrer el array, tomando un valor por cada iteración y el otro `for` anidado compara cada elemento del array en la posición "j" con el elemento en la posición "i" y así por medio del `if` verifica la posición en el array de cada número y si dicho valor que se toma en el primer `for` coincide con el elemento del segundo `for`.

### **¿Cómo manejas los casos donde el conjunto no cumple con las condiciones?**

Manejo los casos donde el conjunto no cumple con las condiciones mediante la comparación de cada elemento del array en la posición "j" con el elemento en la posición "i", por medio del `if` se verifica la posición en el array de cada número y si dicho valor que se tomo en el primer `for` coincide con el del segundo `for`. De no cumplirse la condición numUnico sera `false`, el break detendra el `for` anidado y por último se retornara `null`.