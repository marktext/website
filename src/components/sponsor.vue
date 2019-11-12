<template>
  <div class="sponsor">
    <div class="section-container">
      <h2 class="slogan" id="sponsors">$$ Sponsor $$</h2>
      <div class="sponsors">
        <h4>Platinum Sponsors</h4>
        <ul class="sponsors-list">
          <li v-for="sponsor of platinumSponsors" :key="sponsor.name">
            <a :href="sponsor.link">
              <img :src="sponsor.logo" :alt="sponsor.name">
            </a>
          </li>
          <a href="https://opencollective.com/marktext#platinum-sponsors">
            <svg :viewBox="addIcon.viewBox" aria-hidden="true" class="icon">
              <use :xlink:href="addIcon.url" />
            </svg>
          </a>
        </ul>
        <a href="https://opencollective.com/marktext#platinum-sponsors">
        <img src="https://opencollective.com/marktext/tiers/platinum-sponsors.svg?avatarHeight=36&width=600">
        </a>
        <h5>Bronze Sponsors</h5>
        <a href="https://opencollective.com/marktext#platinum-sponsors">
          <img src="https://opencollective.com/marktext/tiers/bronze-sponsors.svg?avatarHeight=36&width=600">
        </a>

      </div>
      <div class="ask-sponsor">
        <h4>Sponsor Mark Text Development</h4>
        <p>Mark Text is an MIT licensed open source project, you will always be able to download the latest version from <a href="https://github.com/marktext/marktext/releases" target="_blank">GitHub release page</a>. Mark Text is still in development, and its development is inseparable from all sponsors. I hope you join them:</p>
        <div class="button-group">
          <a href="https://opencollective.com/marktext#platinum-sponsors" class="opencollective">
            <svg :viewBox="openColIcon.viewBox" aria-hidden="true" class="icon">
              <use :xlink:href="openColIcon.url" />
            </svg>
            <svg :viewBox="colTextIcon.viewBox" aria-hidden="true" class="icon">
              <use :xlink:href="colTextIcon.url" />
            </svg>
          </a>
          <a href="https://www.patreon.com/ranluo" class="patreon">
            <img src="../assets/patreon.webp" alt="patreon">
            Become A Patreon
          </a>
        </div>
        <div>
          <strong>What's the difference between Patreon and OpenCollective?</strong>
          <div class="description">
            <div>
              <p>Sponsored by Patreon, goes directly to support Ran Luo's work on Mark Text. Sponsored by Open Collective, all expenses are transparent, and used for the development of Mark Text.</p>
              <strong>We also accept <a href="https://github.com/Jocs/sponsor.me" target="_blank"> One Time Donations</a></strong>
            </div>
            <img src="../assets/do_code.image.svg" alt="" class="bg-image">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import addIcon from 'assets/add.svg'
import openColIcon from 'assets/opencollective-icon.svg'
import colTextIcon from 'assets/logotype.svg'
import readmeLogo from 'assets/sponsor/readme.png'
import qordobaLogo from 'assets/sponsor/qordoba.png'

const platinumSponsors = [{
  name: 'readme',
  link: 'https://readme.io',
  logo: readmeLogo
}, {
  name: 'qordoba',
  link: 'https://qordoba.com',
  logo: qordobaLogo
}]
export default {
  name: 'Sponsor',
  data () {
    this.addIcon  = addIcon
    this.openColIcon = openColIcon
    this.colTextIcon = colTextIcon
    this.platinumSponsors = platinumSponsors
    return {}
  }
}
</script>

<style>
.section-container {
  max-width: 1440px;
  max-height: 760px;
  position: relative;
  padding-top: 150px;
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
}
@media screen and (max-width: 768px) {
  .section-container {
    flex-direction: column;
    max-height: none;
    margin: 0;
  }
}
</style>


<style scoped>
  .sponsor {
    width: 100vw;
    height: 100vh;
    background: linear-gradient(-45deg, rgba(238, 119, 82, .05), rgba(231, 60, 126, 0.05));
    display: flex;
    overflow: hidden;
    position: relative;
  }
  @media screen and (max-width: 768px) {
    .sponsor {
      flex-direction: column;
      height: auto;
    }
  }

  h4,
  h5 {
    text-align: center;
    color: #666;
    margin: 30px 0;
    font-weight: 600;
  }

  .sponsor img.bg-image {
    width: 200px;
    height: 200px;
    position: absolute;
    right: 100px;
    bottom: 100px;
  }
  .sponsors-list {
    display: flex;
    & li {
      width: 220px;
      height: 75px;
      margin-right: 20px;
      & a img {
        width: 100%;
        height: 100%;
      }
    }
    & > a {
      width: 75px;
      height: 75px;
      display: block;
      border-radius: 50%;
      color: #ddd;
      border: 2px dashed #ddd;
      display: flex;
      align-items: center;
      justify-content: space-around;
      transition: all .25s ease-in-out;
      & > svg {
        width: 35px;
        height: 35px;
      }
      &:hover {
        color: var(--highlightColor);
        border-color: var(--highlightColor);
        box-shadow: 0 9px 28px -9px var(--highlightColor);
      }
    }
  }
  @media screen and (max-width: 768px) {
    .sponsors-list {
      display: block;
      padding-left: 0;
      & li {
        margin: 0 auto;
      }
      & > a {
        margin: 0 auto;
      }
    }
  }
  .sponsors {
    min-width: 600px;
    & h5 {
      margin-top: 60px;
    }
  }
  @media screen and (max-width: 768px) {
    .sponsors {
      min-width: auto;
      padding: 0 30px;
      text-align: center;
    }
    .sponsors > a {
      display: inline-block;
    }
  }
  .ask-sponsor {
    min-width: 600px;
    flex: 0;
    & p {
      max-width: 100%;
    }
  }
  @media screen and (max-width: 768px) {
    .ask-sponsor {
      min-width: auto;
      padding: 0 30px 60px;
    }
  }
  .button-group {
    margin: 30px 0 30px 0;
    display: flex;
    justify-content: space-around;
    & > a {
      width: 200px;
      display: inline-block;
      transition: all .25s ease-in;
    }
    & a.opencollective {
      height: 45px;
      border-radius: 22px;
      border: 1px solid #999;
      display: flex;
      align-items: center;
      background: #fff;
      & > svg:first-of-type {
        width: 31px;
        height: 31px;
        margin-left: 7px;
      }
      & > svg:last-of-type {
        width: 120px;
        flex: 1;
      }
      &:hover {
        box-shadow: 0 9px 28px -9px rgba(0, 0, 0, .2);
      }
    }
    & a.patreon {
      height: 45px;
      width: 230px;
      background: #f96854;
      color: #fff;
      border: 1px solid #f96854;
      border-radius: 8px;
      padding: 0 20px;
      text-transform: uppercase;
      font-weight: 600;
      text-decoration: none;
      padding-left: 45px;
      position: relative;
      line-height: 45px;
      &:hover {
        box-shadow: 0 9px 28px -9px #f96854;
      }
      & img {
        width: 31px;
        height: 31px;
        position: absolute;
        top: 7px;
        left: 7px;
      }
    }
  }
  .ask-sponsor div.description {
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-top: 15px;
    & > div {
      max-width: 350px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      & strong {
        margin-top: 20px;
      }
    }
    & img {
      width: 200px;
      height: 200px;
    }
  }
  @media screen and (max-width: 768px) {
    .ask-sponsor div.description {
      flex-direction: column;
      & > div {
        max-width: none;
        flex-direction: column;
      }
      & img {
        position: static;
      }
    }
  }
</style>


