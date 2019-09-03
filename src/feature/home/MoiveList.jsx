import React, { Component, Fragment } from "react";
import { List, Image, ItemGroup, Item } from "semantic-ui-react";

const movies = {
  results: [
    {
      popularity: 227.352,
      vote_count: 906,
      video: false,
      poster_path: "/keym7MPn1icW1wWfzMnW3HeuzWU.jpg",
      id: 384018,
      adult: false,
      backdrop_path: "/hpgda6P9GutvdkDX5MUJ92QG9aj.jpg",
      original_language: "en",
      original_title: "Fast & Furious Presents: Hobbs & Shaw",
      genre_ids: [28],
      title: "Fast & Furious Presents: Hobbs & Shaw",
      vote_average: 6.5,
      overview:
        "A spinoff of The Fate of the Furious, focusing on Johnson's US Diplomatic Security Agent Luke Hobbs forming an unlikely alliance with Statham's Deckard Shaw.",
      release_date: "2019-08-02"
    },
    {
      popularity: 178.269,
      vote_count: 2192,
      video: false,
      poster_path: "/2bXbqYdUdNVa8VIWXVfclP2ICtT.jpg",
      id: 420818,
      adult: false,
      backdrop_path: "/1TUg5pO1VZ4B0Q1amk3OlXvlpXV.jpg",
      original_language: "en",
      original_title: "The Lion King",
      genre_ids: [28, 12, 16, 18, 10751],
      title: "The Lion King",
      vote_average: 7.2,
      overview:
        "Simba idolises his father, King Mufasa, and takes to heart his own royal destiny. But not everyone in the kingdom celebrates the new cub's arrival. Scar, Mufasa's brother—and former heir to the throne—has plans of his own. The battle for Pride Rock is ravaged with betrayal, tragedy and drama, ultimately resulting in Simba's exile. With help from a curious pair of newfound friends, Simba will have to figure out how to grow up and take back what is rightfully his.",
      release_date: "2019-07-19"
    },
    {
      popularity: 103.06,
      vote_count: 30,
      video: false,
      poster_path: "/kTca5fpKhFOKIiG0tz8tynhsWs5.jpg",
      id: 593961,
      adult: false,
      backdrop_path: "/foMDjFHrTrex6Rr6bApB8TbWlie.jpg",
      original_language: "tl",
      original_title: "Hello, Love, Goodbye",
      genre_ids: [18, 10749],
      title: "Hello, Love, Goodbye",
      vote_average: 6,
      overview:
        "A love story of Joy and Ethan, Filipino workers based in Hong Kong. Ethan, a bartender, is keen on romantically pursuing Joy, a domestic helper who is wholly dedicated to providing for her family.",
      release_date: "2019-07-31"
    },
    {
      popularity: 197.528,
      vote_count: 178,
      video: false,
      poster_path: "/fapXd3v9qTcNBTm39ZC4KUVQDNf.jpg",
      id: 423204,
      adult: false,
      backdrop_path: "/k2WyDw2NTUIWnuEs5gT7wgrCQg6.jpg",
      original_language: "en",
      original_title: "Angel Has Fallen",
      genre_ids: [28],
      title: "Angel Has Fallen",
      vote_average: 5.9,
      overview:
        "Secret Service Agent Mike Banning is framed for the attempted assassination of the President and must evade his own agency and the FBI as he tries to uncover the real threat.",
      release_date: "2019-08-23"
    },
    {
      popularity: 118.629,
      vote_count: 25,
      video: false,
      poster_path: "/MBiKqTsouYqAACLYNDadsjhhC0.jpg",
      id: 486589,
      adult: false,
      backdrop_path: "/bga3i5jcejBekr2FCGJga1fYCh.jpg",
      original_language: "en",
      original_title: "Red Shoes and the Seven Dwarfs",
      genre_ids: [16, 10749],
      title: "Red Shoes and the Seven Dwarfs",
      vote_average: 5.1,
      overview:
        "Princes who have been turned into Dwarfs seek the red shoes of a lady in order to break the spell, although it will not be easy.",
      release_date: "2019-07-25"
    },
    {
      popularity: 98.49,
      vote_count: 395,
      video: false,
      poster_path: "/fgGzTEoNxptCRtEOpOPvIEdlxAq.jpg",
      id: 535581,
      adult: false,
      backdrop_path: "/sLmVJIvwlGioO8C0wAOdzJWGUHP.jpg",
      original_language: "en",
      original_title: "The Dead Don't Die",
      genre_ids: [35, 27],
      title: "The Dead Don't Die",
      vote_average: 5.7,
      overview:
        "In a small peaceful town, zombies suddenly rise to terrorize the town. Now three bespectacled police officers and a strange Scottish morgue expert must band together to defeat the undead.",
      release_date: "2019-06-14"
    },
    {
      popularity: 110.956,
      vote_count: 152,
      video: false,
      poster_path: "/jIthqo2tQmW8TFN1fYpF8FmVL0o.jpg",
      id: 521777,
      adult: false,
      backdrop_path: "/6Xsz9KHQmCcIcj3CoWQq5eLtVoT.jpg",
      original_language: "en",
      original_title: "Good Boys",
      genre_ids: [35],
      title: "Good Boys",
      vote_average: 6.7,
      overview:
        "A group of young boys on the cusp of becoming teenagers embark on an epic quest in the San Fernando Valley to fix their broken toy before their parents get home.",
      release_date: "2019-08-16"
    },
    {
      popularity: 84.157,
      vote_count: 1081,
      video: false,
      poster_path: "/dPrUPFcgLfNbmDL8V69vcrTyEfb.jpg",
      id: 479455,
      adult: false,
      backdrop_path: "/uK9uFbAwQ1s2JHKkJ5l0obPTcXI.jpg",
      original_language: "en",
      original_title: "Men in Black: International",
      genre_ids: [28, 12, 35, 878],
      title: "Men in Black: International",
      vote_average: 5.9,
      overview:
        "The Men in Black have always protected the Earth from the scum of the universe. In this new adventure, they tackle their biggest, most global threat to date: a mole in the Men in Black organization.",
      release_date: "2019-06-14"
    },
    {
      popularity: 72.734,
      vote_count: 39,
      video: false,
      poster_path: "/9Z2qT9iZYLzzsCSYu7A4SEQsKX0.jpg",
      id: 571627,
      adult: false,
      backdrop_path: "/7cGsa6sqTFsrws322p0QaIe7GUX.jpg",
      original_language: "ko",
      original_title: "사자",
      genre_ids: [28, 27],
      title: "The Divine Fury",
      vote_average: 3.7,
      overview:
        "After waking up with mysterious wounds on his hands, a champion fighter finds himself in an otherworldly battle against evil forces that wreak havoc in the human world.",
      release_date: "2019-08-16"
    },
    {
      popularity: 65.655,
      vote_count: 2034,
      video: false,
      poster_path: "/w9kR8qbmQ01HwnvK4alvnQ2ca0L.jpg",
      id: 301528,
      adult: false,
      backdrop_path: "/m67smI1IIMmYzCl9axvKNULVKLr.jpg",
      original_language: "en",
      original_title: "Toy Story 4",
      genre_ids: [12, 16, 35, 10751],
      title: "Toy Story 4",
      vote_average: 7.7,
      overview:
        'Woody has always been confident about his place in the world and that his priority is taking care of his kid, whether that\'s Andy or Bonnie. But when Bonnie adds a reluctant new toy called "Forky" to her room, a road trip adventure alongside old and new friends will show Woody how big the world can be for a toy.',
      release_date: "2019-06-21"
    },
    {
      popularity: 68.931,
      vote_count: 509,
      video: false,
      poster_path: "/nYcaCNkB4EgVyvrXxxbklefDrGL.jpg",
      id: 412117,
      adult: false,
      backdrop_path: "/etaok7q2E5tV36oXe7GQzhUQ4fX.jpg",
      original_language: "en",
      original_title: "The Secret Life of Pets 2",
      genre_ids: [12, 16, 35, 10751],
      title: "The Secret Life of Pets 2",
      vote_average: 6.6,
      overview:
        "Max the terrier must cope with some major life changes when his owner gets married and has a baby. When the family takes a trip to the countryside, nervous Max has numerous run-ins with canine-intolerant cows, hostile foxes and a scary turkey. Luckily for Max, he soon catches a break when he meets Rooster, a gruff farm dog who tries to cure the lovable pooch of his neuroses.",
      release_date: "2019-06-07"
    },
    {
      popularity: 65.661,
      vote_count: 242,
      video: false,
      poster_path: "/7IRy0iHdaS0JI3ng4ZYlk5gLSFn.jpg",
      id: 506574,
      adult: false,
      backdrop_path: "/gzdxeOiO76hDoOSKYCxegj7bk4T.jpg",
      original_language: "en",
      original_title: "Descendants 3",
      genre_ids: [12, 10402, 10751],
      title: "Descendants 3",
      vote_average: 7.6,
      overview:
        "The teenagers of Disney's most infamous villains return to the Isle of the Lost to recruit a new batch of villainous offspring to join them at Auradon Prep.",
      release_date: "2019-08-09"
    },
    {
      popularity: 85.16,
      vote_count: 755,
      video: false,
      poster_path: "/8j58iEBw9pOXFD2L0nt0ZXeHviB.jpg",
      id: 466272,
      adult: false,
      backdrop_path: "/kKTPv9LKKs5L3oO1y5FNObxAPWI.jpg",
      original_language: "en",
      original_title: "Once Upon a Time in Hollywood",
      genre_ids: [28, 35, 80, 18, 37],
      title: "Once Upon a Time in Hollywood",
      vote_average: 7.6,
      overview:
        "A faded television actor and his stunt double strive to achieve fame and success in the film industry during the final years of Hollywood's Golden Age in 1969 Los Angeles.",
      release_date: "2019-07-26"
    },
    {
      popularity: 51.291,
      vote_count: 522,
      video: false,
      poster_path: "/hgWAcic93phg4DOuQ8NrsgQWiqu.jpg",
      id: 452832,
      adult: false,
      backdrop_path: "/oOROXoQ402tHgK6NowmMUSLffkW.jpg",
      original_language: "en",
      original_title: "Serenity",
      genre_ids: [9648, 53],
      title: "Serenity",
      vote_average: 5.2,
      overview:
        "Baker Dill is a fishing boat captain leading tours off a tranquil, tropical enclave called Plymouth Island. His quiet life is shattered, however, when his ex-wife Karen tracks him down with a desperate plea for help.",
      release_date: "2019-01-25"
    },
    {
      popularity: 53.88,
      vote_count: 2258,
      video: false,
      poster_path: "/wgQ7APnFpf1TuviKHXeEe3KnsTV.jpg",
      id: 447404,
      adult: false,
      backdrop_path: "/nDP33LmQwNsnPv29GQazz59HjJI.jpg",
      original_language: "en",
      original_title: "Pokémon Detective Pikachu",
      genre_ids: [28, 12, 14],
      title: "Pokémon Detective Pikachu",
      vote_average: 7,
      overview:
        "In a world where people collect pocket-size monsters (Pokémon) to do battle, a boy comes across an intelligent monster who seeks to be a detective.",
      release_date: "2019-05-10"
    },
    {
      popularity: 42.798,
      vote_count: 43,
      video: false,
      poster_path: "/vVYU0x9FRpiJNX7c54ciFnRBVYG.jpg",
      id: 441282,
      adult: false,
      backdrop_path: "/6rJAeP8xlq0bHUdCNg5epBvrFVa.jpg",
      original_language: "en",
      original_title: "Night Hunter",
      genre_ids: [80, 9648, 53],
      title: "Night Hunter",
      vote_average: 6.1,
      overview:
        "A police task force traps an online predator, only to discover that the depth of his crimes goes far beyond anything they had anticipated.",
      release_date: "2019-09-06"
    },
    {
      popularity: 51.119,
      vote_count: 1040,
      video: false,
      poster_path: "/f4FF18ia7yTvHf2izNrHqBmgH8U.jpg",
      id: 504608,
      adult: false,
      backdrop_path: "/oAr5bgf49vxga9etWoQpAeRMvhp.jpg",
      original_language: "en",
      original_title: "Rocketman",
      genre_ids: [18, 10402],
      title: "Rocketman",
      vote_average: 7.5,
      overview:
        "The story of Elton John's life, from his years as a prodigy at the Royal Academy of Music through his influential and enduring musical partnership with Bernie Taupin.",
      release_date: "2019-05-31"
    },
    {
      popularity: 55.146,
      vote_count: 95,
      video: false,
      poster_path: "/vOl6shtL0wknjaIs6JdKCpcHvg8.jpg",
      id: 567609,
      adult: false,
      backdrop_path: "/aNrNi5QExO6b8MnEGsfpgp21NIY.jpg",
      original_language: "en",
      original_title: "Ready or Not",
      genre_ids: [27, 9648, 53],
      title: "Ready or Not",
      vote_average: 7.6,
      overview:
        "A bride's wedding night takes a sinister turn when her eccentric new in-laws force her to take part in a terrifying game.",
      release_date: "2019-08-21"
    },
    {
      popularity: 41.559,
      vote_count: 97,
      video: false,
      poster_path: "/xvYCZ740XvngXK0FNeSNVTJJJ5v.jpg",
      id: 499701,
      adult: false,
      backdrop_path: "/61sbyO47yIpsMFyLhY1MWcqjg1Q.jpg",
      original_language: "en",
      original_title: "Dora and the Lost City of Gold",
      genre_ids: [12, 35, 10751],
      title: "Dora and the Lost City of Gold",
      vote_average: 6,
      overview:
        "Dora, a girl who has spent most of her life exploring the jungle with her parents, now must navigate her most dangerous adventure yet: high school. Always the explorer, Dora quickly finds herself leading Boots (her best friend, a monkey), Diego, and a rag tag group of teens on an adventure to save her parents and solve the impossible mystery behind a lost Inca civilization.",
      release_date: "2019-08-09"
    },
    {
      popularity: 42.775,
      vote_count: 1061,
      video: false,
      poster_path: "/bk8LyaMqUtaQ9hUShuvFznQYQKR.jpg",
      id: 456740,
      adult: false,
      backdrop_path: "/5BkSkNtfrnTuKOtTaZhl8avn4wU.jpg",
      original_language: "en",
      original_title: "Hellboy",
      genre_ids: [28, 12, 14, 27, 878],
      title: "Hellboy",
      vote_average: 5.1,
      overview:
        "Hellboy comes to England, where he must defeat Nimue, Merlin's consort and the Blood Queen. But their battle will bring about the end of the world, a fate he desperately tries to turn away.",
      release_date: "2019-04-12"
    }
  ],
  page: 1,
  total_results: 1104,
  dates: { maximum: "2019-09-01", minimum: "2019-07-15" },
  total_pages: 56
};

class MoiveList extends Component {
  state = {
    movies: movies.results
  };

  render() {
    return (
      <Item.Group>
          {this.state.movies.map(movie => {
              return (
                <Item>
                <Item.Image
                  size="tiny"
                  src={"https://image.tmdb.org/t/p/w342/" + movie.poster_path}
                />
      
                <Item.Content>
                  <Item.Header>{movie.original_title}</Item.Header>
                  <Item.Meta>
                    <span className="price">{"avg:" + movie.vote_average}</span>
                    <span className="stay">{"count:" + movie.vote_count}</span>
                  </Item.Meta>
                  <Item.Description>{movie.overview}</Item.Description>
                </Item.Content>
              </Item>
              );
          })}
      </Item.Group>
    );
  }
}
export default MoiveList;


  /* <List>
{this.state.movies.map(movie => {
  return (
    <List.Item>
      <Image
        src={"https://image.tmdb.org/t/p/w342/" + movie.poster_path}
      />
      <List.Content>
        <List.Header as="a">{movie.original_title}</List.Header>
        <List.Description>{movie.overview}</List.Description>
      </List.Content>
    </List.Item>
  );
})}
</List> */

