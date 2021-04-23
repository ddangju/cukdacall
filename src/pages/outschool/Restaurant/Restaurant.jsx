import React, { Component } from 'react';
import Description from '../components/Description';
import ContentsTabs from '../components/ContentsTabs';
import PlacePhoto from '../components/PlacePhoto';
import PlaceText from '../components/PlaceText';
import './Restaurant.scss';

export default class Restaurant extends Component {
  state = {
    tabcontents: [
      { id: 1, title: '한솥도시락' },
      { id: 2, title: '한솥도시' },
      { id: 3, title: '한솥도' },
      { id: 4, title: '한솥' },
      { id: 5, title: '한' },
    ],
    photo: [],
    text: [],
  };

  handleClick = () => {};
  render() {
    return (
      <div>
        <section className="outSchoolContainer">
          <header className="description">
            <Description />
          </header>
          <section className="outSchoolContents">
            <article className="RestaurantTabsBox">
              {/* <ContentsTabs /> */}
              {this.state.tabcontents.map(menu => (
                <ContentsTabs
                  key={menu.id}
                  menu={menu}
                  onClick={() => this.handleClick}
                />
              ))}
            </article>
            <article className="contentsBox">
              <PlacePhoto />
              <PlaceText />
            </article>
          </section>
        </section>
      </div>
    );
  }
}
