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
          <a href="https://opencollective.com/marktext#platinum-sponsors" target="_blank">
            <svg :viewBox="addIcon.viewBox" aria-hidden="true" class="icon">
              <use :xlink:href="addIcon.url" />
            </svg>
          </a>
        </ul>
        <a href="https://opencollective.com/marktext#platinum-sponsors" target="_blank">
        <img src="https://opencollective.com/marktext/tiers/platinum-sponsors.svg?avatarHeight=36&width=600">
        </a>
        <h5>Bronze Sponsors</h5>
        <a href="https://opencollective.com/marktext#platinum-sponsors" target="_blank">
          <img src="https://opencollective.com/marktext/tiers/bronze-sponsors.svg?avatarHeight=36&width=600">
        </a>

      </div>
      <div class="ask-sponsor">
        <h4>Sponsor MarkText Development</h4>
        <p>MarkText is an MIT licensed open source project, you will always be able to download the latest version from <a href="https://github.com/marktext/marktext/releases" target="_blank">GitHub release page</a>. MarkText is still in development, and its development is inseparable from all sponsors. I hope you join them:</p>
        <div class="button-group">
          <a href="https://opencollective.com/marktext#platinum-sponsors" class="opencollective" target="_blank">
            <svg :viewBox="openColIcon.viewBox" aria-hidden="true" class="icon">
              <use :xlink:href="openColIcon.url" />
            </svg>
            <svg :viewBox="colTextIcon.viewBox" aria-hidden="true" class="icon">
              <use :xlink:href="colTextIcon.url" />
            </svg>
          </a>
          <a href="https://www.patreon.com/ranluo" class="patreon" target="_blank">
            <img src="../assets/patreon.webp" alt="patreon">
            Become A Patreon
          </a>
        </div>
        <div>
          <strong>What's the difference between Patreon and OpenCollective?</strong>
          <div class="description">
            <div>
              <p>Sponsored by Patreon, goes directly to support Ran Luo's work on MarkText. Sponsored by Open Collective, all expenses are transparent, and used for the development of MarkText.</p>
              <strong>We also accept <a href="https://github.com/Jocs/sponsor.me" target="_blank"> One Time Donations</a></strong>
            </div>
            <div class="description-image">
              <img src="../assets/do_code.image.svg" alt="">
            </div>
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
  padding-top: 120px;
  padding-bottom: 120px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  gap: 60px;
}

@media screen and (max-width: 768px) {
  .section-container {
    flex-direction: column;
    max-height: none;
    margin: 0;
    padding-top: 60px;
    padding-bottom: 60px;
    gap: 40px;
  }
}
</style>


<style scoped>
  .sponsor {
    width: 100vw;
    min-height: 100vh;
    background: linear-gradient(-45deg, rgba(238, 119, 82, .05), rgba(231, 60, 126, 0.05));
    display: flex;
    overflow: auto;
    position: relative;
    padding: 0 40px;
  }

  @media screen and (max-width: 768px) {
    .sponsor {
      flex-direction: column;
      height: auto;
      padding: 0 20px;
    }
  }

  h4 {
    text-align: center;
    color: #333;
    margin: 40px 0 30px;
    font-weight: 700;
    font-size: 24px;
  }

  h5 {
    text-align: center;
    color: #666;
    margin: 50px 0 30px;
    font-weight: 600;
    font-size: 20px;
  }

  .sponsor img.bg-image {
    width: 200px;
    height: 200px;
    position: absolute;
    right: 80px;
    bottom: 80px;
    opacity: 0.3;
    pointer-events: none;
  }

  @media screen and (max-width: 768px) {
    .sponsor img.bg-image {
      display: none;
    }
  }
  .sponsors-list {
    display: flex;
    align-items: center;
    gap: 20px;
    padding: 0;
    list-style: none;

    & li {
      width: 220px;
      height: 75px;
      flex-shrink: 0;

      &.square {
        width: 75px;
      }

      & a {
        display: block;
        width: 100%;
        height: 100%;
        transition: transform 0.3s ease;

        &:hover {
          transform: translateY(-5px);
        }

        & img {
          width: 100%;
          height: 100%;
          object-fit: contain;
        }
      }
    }

    & > a {
      width: 75px;
      height: 75px;
      flex-shrink: 0;
      border-radius: 50%;
      color: #ddd;
      border: 2px dashed #ddd;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all 0.3s ease;

      & > svg {
        width: 35px;
        height: 35px;
      }

      &:hover {
        color: var(--highlightColor);
        border-color: var(--highlightColor);
        box-shadow: 0 9px 28px -9px var(--highlightColor);
        transform: translateY(-5px);
      }
    }
  }

  @media screen and (max-width: 768px) {
    .sponsors-list {
      flex-direction: column;
      align-items: center;
      gap: 15px;

      & li {
        margin: 0;
      }

      & > a {
        margin: 0;
      }
    }
  }
  .sponsors {
    flex: 1;
    min-width: 600px;
    max-width: 700px;

    & > a {
      display: block;
      margin: 20px 0;
      transition: opacity 0.3s ease;

      &:hover {
        opacity: 0.8;
      }

      & img {
        width: 100%;
        height: auto;
      }
    }
  }

  @media screen and (max-width: 768px) {
    .sponsors {
      min-width: auto;
      max-width: 100%;
      padding: 0;
      text-align: center;
    }

    .sponsors > a {
      display: inline-block;
      max-width: 100%;
    }
  }
  .ask-sponsor {
    flex: 1;
    min-width: 600px;
    max-width: 700px;

    & p {
      max-width: 100%;
      line-height: 1.8;
      color: #555;
      font-size: 16px;
      margin-bottom: 30px;

      & a {
        color: var(--themeColor);
        text-decoration: underline;

        &:hover {
          opacity: 0.8;
        }
      }
    }

    & > div > strong {
      display: block;
      margin: 40px 0 20px;
      font-size: 18px;
      color: #333;
    }
  }

  @media screen and (max-width: 768px) {
    .ask-sponsor {
      min-width: auto;
      max-width: 100%;
      padding: 0;
    }
  }

  .button-group {
    margin: 30px 0;
    display: flex;
    gap: 20px;
    flex-wrap: wrap;

    & > a {
      flex: 1;
      min-width: 200px;
      max-width: 250px;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all 0.3s ease;
    }
    & a.opencollective {
      height: 50px;
      border-radius: 25px;
      border: 2px solid #7fadf2;
      display: flex;
      align-items: center;
      justify-content: center;
      background: #fff;
      padding: 0 15px;

      & > svg:first-of-type {
        width: 32px;
        height: 32px;
        margin-right: 8px;
        flex-shrink: 0;
      }

      & > svg:last-of-type {
        width: 120px;
        height: auto;
        flex-shrink: 0;
      }

      &:hover {
        box-shadow: 0 8px 20px rgba(127, 173, 242, 0.4);
        transform: translateY(-2px);
        border-color: #5a9def;
      }
    }

    & a.patreon {
      height: 50px;
      background: #f96854;
      color: #fff;
      border: 2px solid #f96854;
      border-radius: 8px;
      padding: 0 20px 0 50px;
      text-transform: uppercase;
      font-weight: 700;
      text-decoration: none;
      position: relative;
      white-space: nowrap;
      font-size: 14px;
      letter-spacing: 0.5px;

      &:hover {
        box-shadow: 0 8px 20px rgba(249, 104, 84, 0.4);
        transform: translateY(-2px);
        background: #ff7461;
      }

      & img {
        width: 32px;
        height: 32px;
        position: absolute;
        top: 50%;
        left: 10px;
        transform: translateY(-50%);
      }
    }
  }

  @media screen and (max-width: 768px) {
    .button-group {
      flex-direction: column;
      align-items: stretch;

      & > a {
        max-width: 100%;
      }
    }
  }
  .ask-sponsor div.description {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-top: 20px;
    padding: 25px;
    background: rgba(255, 255, 255, 0.9);
    border-radius: 12px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
    position: relative;
    z-index: 1;
    gap: 30px;

    & > div:first-child {
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      gap: 20px;

      & p {
        margin: 0;
        line-height: 1.8;
        color: #555;
        font-size: 15px;
      }

      & strong {
        font-size: 16px;
        color: #333;

        & a {
          color: var(--themeColor);
          text-decoration: underline;

          &:hover {
            opacity: 0.8;
          }
        }
      }
    }
  }

  .ask-sponsor .description-image {
    width: 180px;
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: center;

    & img {
      width: 100%;
      height: auto;
      opacity: 0.8;
    }
  }

  @media screen and (max-width: 768px) {
    .ask-sponsor div.description {
      flex-direction: column;
      padding: 20px;
      gap: 20px;

      & > div:first-child {
        max-width: 100%;
      }
    }

    .ask-sponsor .description-image {
      width: 150px;
      margin: 0 auto;
    }
  }
</style>


