
function setupCards(){

  const topicList = [
    {
      topic: 'Commuting',
      desc: `In the first week, we wanted to focus on how we get around. Niko has been still relatively new to SF and Olivier was freelancing at the time.`
    },
    {
      topic: 'Drinks',
      desc: `What we both love so much about the book, is that they just take basic day-to-day actions to collect the data from. So we decided to look at our drinking behavior.`
    },
    {
      topic: 'Stairs',
      desc: `Sometimes the little things make the most interesting visualizations. Olivier struggled a bit since he was in a different building every day. Niko cheated a little, which is ok, looking at the sheer amount of lines.`
    },
    {
      topic: 'Paying',
      desc: `We wanted to display our spending throughout this week. Coincidentally, Olivier has been that week in Sweden, one of the few European countries that do not have the Euro [€].`
    },
    {
      topic: 'Communicating',
      desc: `Tracking all our communication was hard. We both were so relieved when this week was over. Recommendation from us: If you intend to do a "Dear Data" project as well, don't do this topic!`
    },
    {
      topic: 'Clothing',
      desc: `During this week, Niko was surfing in Hawaii, which inspired him to, finally, use some color. Apparently, Olivier’s only colorful item in his closet is his watch.`
    }
  ];

  let numOfWeeks = topicList.length;

  let m = '';

  for (let i = 1; i <= numOfWeeks; i++) {

    let currNum = i;

    if ( currNum <= 9 ) {
      currNum = '0' + currNum;
    }

    m+= '<div class="week week'+currNum+'" id="week'+currNum+'">';

      m+= '<div class="description">';
        m+= '<h4>Week #'+currNum+'</h4>';
        m+= '<h2>'+topicList[i-1].topic+'</h2>';

         m+= topicList[i-1].desc

      m+= '</div>';

      m+= '<div class="cardContainer">';

        for (let x = 1; x <= 2; x++) {

          let name = 'niko';

          if( x == 2 ){
            name = 'olivier';
          }

          m+= '<div class="card card-of-'+name+'">';

            m+= '<div class="front" style="background-image: url(img/'+currNum+'-'+name+'-front.jpg)"></div>';

            m+= '<div class="back" style="background-image: url(img/'+currNum+'-'+name+'-back.jpg)"></div>';

          m+= '</div>';

        }

      m+= '</div>';

    m+= '</div>';

  }


  document.querySelector('section.cards').insertAdjacentHTML('beforeend',m);


  document.querySelectorAll('.card').forEach( (card) => {
    card.onclick = () => {
      card.classList.toggle('flipped');
    }
  });

}

document.addEventListener("DOMContentLoaded", function(){
  setupCards();
});
