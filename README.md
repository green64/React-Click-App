# Click-a-Pokémon App
[Click-a-Pokémon app](https://nameless-garden-27229.herokuapp.com/)

This app uses React to create a game that counts and reacts to user input.

## Object

Using the React library, this componentized app includes JSX, which combines HTML and JavaScript, to create an app with easily reused pieces. No database this time; JavaScript tracks interactions on the front end. 

Once the player clicks on a Pokémon, React reshuffles the 12 images. The goal is to avoid  clicking the same object before reaching 12, which is the maximum score. 

### Making sense of components

Once I had the basic app created, I admit scratching my head about how to create a function that affected elements in one component but displayed in another &mdash; in this case a counter that renders in the header that counts clicks in the main body where the images reside. 

Byron, our tireless TA, helped me understand with a game analogy. The rules are part of the game, but they're not IN the game. And you can't play the game without the rules. In other words, the rules(functions) need to be above all the interlocking pieces (components, pages, etc.).

He also explained that functions have to cascade down, so they need to be at the highest level &mdash; above the components that come together courtesy of ```componentDidMount()``` to create the app. 

## Technology used

In addition to HTML, CSS, and JavaScript, my React Click-a-Pokémon app uses ```create-react-app``` and Yarn to keep the app updated in the browser. g

## Code excerpts

With that guidance in mind, I moved my Pokémon card setup out of app.js (which sits at the root level), and put it back in the Pokecard folder, which sits inside the components folder. 

Now, this is all that sits in the app.js folder:

```
 <Wrapper>
          {
            this.state.pokes.map(poke => (
              <PokeCard
                name={poke.name}
                image={poke.image}
                selectPoke={this.selectPoke}
                runningScore={this.state.runningScore}
              />
            ))
          }
        </Wrapper>
```

## Conclusions

We've only scratched the surface of React. It's a confusing library. But I can see the power inherent in its componetizing and familiar JSX syntax.

:neckbeard:
