import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import 'tachyons';
import SearchBox from './components/SearchBox'
import SpellPanel from './components/SpellPanel'

class App extends Component {

  constructor() {
    super();
    this.state = {
      //class: {},   this is to be used when we implement class functionality
      searchfield: '',
      result: {name: "",
                desc: "",
                range: "",
                level: null},
      searchUrl : ""
    }
  }


  onSearchChange = (event) => {
    this.setState({searchfield: event.target.value});
    console.log("searchfield: " + this.state.searchfield);
    // console.log("search url" + this.state.searchUrl);
  }


  search = () => {
    this.urlifySpell(this.state.searchfield);
    if (this.state.searchUrl){
      fetch(this.state.searchUrl)
        .then(response=>response.json())
        .then(spell => this.setState({result: spell}))
        .catch(() => console.log("Search Error"));
    }
    // console.log(this.urlifySpell(this.state.searchfield));
    console.log(this.state.searchUrl);
    console.log(this.state.searchfield);

  }

  onSearchClick = (event) => {
    this.search();
  }

  onEnter = (event) => {
    if (event.which==13 || event.keyCode==13){
      event.preventDefault();
      this.search();
    }
  }


  urlifySpell(text) {
    const queries = text.split(" ");
    const linkUrl = 'http://www.dnd5eapi.co/api/spells/?name=' + queries.join("+");
    var spellUrl = '';
    fetch(linkUrl)
      .then(response=>response.json())
      .then(result=> {
        if (result.count >=1){
          this.setState({searchUrl: result.results[0].url});
        } else {
          window.alert("No result found");
        }
    })
      .catch(() => console.log("Urlify Error"));

    // console.log("spellurl " + spellUrl);
    // console.log("searchurl " + this.state.searchUrl);

  }

  render() {

    const {name, desc, range, level, higher_level, duration, concentration, casting_time} = this.state.result;

    return (
      <div className="tc">
        <h1 className="tc title">Spellbook</h1>
        <p> Click twice if search results don't come in the first time. The oracle needs time to browse the spell library </p>
        <p> If the spell isn't here, it's because it's a Xanathar spell. The oracle does not have access to those</p>
        <SearchBox searchClick={this.onSearchClick} searchfield={this.state.searchfield} searchChange={this.onSearchChange} onEnter={this.onEnter}/>
        <SpellPanel name={name} desc={desc} range={range} level={level} higher_level={higher_level} duration={duration} concentration={concentration}
          casting_time={casting_time}/>
      </div>
      );

  }




}

export default App;
