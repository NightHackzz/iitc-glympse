// ==UserScript==
// @name         IITC plugin: Glympse
// @category     Layer
// @author       NightHackz
// @version      0.2.1
// @namespace    https://github.com/NightHackzz/iitc-glympse
// @downloadURL  https://github.com/NightHackzz/iitc-glympse/raw/master/iitc-glympsemap.user.js
// @updateURL    https://github.com/NightHackzz/iitc-glympse/raw/master/iitc-glympsemap.user.js
// @description  View a Glympse tag directly on the Intel map.
// @match        *://intel.ingress.com/*
// @grant        none
// @icon         data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeBAMAAADJHrORAAAAKlBMVEUA9DhAebw5b7Y5b7Y5b7Y5b7ZYhsH///+fudzi6vRIpdttlclPwO45b7bf8WGPAAAAAXRSTlMAQObYZgAAANhJREFUGNNlkTsOwjAMhqvcgE48lsYDonAqunECE7Ex0KxlqSommFDVhW5cocqhsJ20hfIPkb78fiR2FLEUACTRIPDqUQVOfrG/gFGDrWcx7H0A89I5V3eeCbdOJAlk68ZzzAFK7Lqmu0fgpiNHB6YkRth2d+lIzrPijuEFALvySIe19uJ5g8Q5klrhFE8AJfN19Kd8qKoSz74eYkaV1j5fcWxBvEAT3pejaakrpwmniIayuVzC/9VSHE0mA6KAuXAxzudNeOsHyt9Y2dewgem8p/v429f3Pj/UdGXDkoFlRwAAAABJRU5ErkJggg==
// @icon64       data:image/png;base64,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
// ==/UserScript==

function wrapper(PluginInfo) {
  // ensure plugin framework is there, even if iitc is not yet loaded

  // eslint-disable-next-line func-names
  if (typeof window.plugin !== 'function') window.plugin = function () { };

  // PLUGIN START ////////////////////////////////////////////////////////

  // use own namespace for plugin

  // eslint-disable-next-line func-names
  window.plugin.glympse = function () { };

  // #region global vars

  let user = '';
  let password = '';
  let apiKey = '';
  let glympsetag = '';
  let updateSpeed = 5000;

  /** @type {string} */
  let accesstoken;
  /** @type {Member[]} */
  let allMembers = [];
  /** @type {L.LayerGroup} */
  let glympseLayers;
  let next = 0;
  let updateLoop = null;
    const markerStyle = `
    .agent-avatar {
        background: linear-gradient(to bottom right, lime, blue);
        border-radius: 50%;
        height: 100%;
        padding: 5px;
        width: 100%;
        & img {
            background: #fff; /* 透過してる画像の対応 */
            border-radius: 50%;
            height: 40px !important;
            width:  40px !important;
        }

    }
    .agent-avatar.expired {
      opacity: 0.5;
    }
    `;

  // #endregion

  /**
   * Enum describing the travel modes supported by Glympse
   * @const
   * @readonly
   * @enum {string}
  */
  const travelMode = Object.freeze({
    drive:   '車',
    cycle:   'バイク',
    walk:    '徒歩',
    transit: '公共交通機関',
    airline: '飛行機',
    undefined: '？'
  });

  /**
     * All important data for a Glympse member.
     * @typedef {object} Member
     * @property {string} id - Member's Glympse ID
     * @property {string} invite - ticket ID for this member
     * @property {boolean | undefined} expired - if ticket is expired
     * @property {L.Marker} marker - Marker at the member's last known position
     * @property {L.Polyline} line - member's location history
     * @property {string} name - member's nickname
     * @property {number} next - latest event timestamp
     * @property {string | undefined} avatar - url to the member's avatar image
     * @property {string | undefined} travelType - how the member is travelling; e.g. walk, drive, cycle
     * @property {Date} last - last time location updated
     * @property {number | undefined} heading - last heading of the member, if known
     * @property {number | undefined} speed - last speed of the member, if known. in km/h
     */

  /**
   * @callback Predicate
   * @template T type of elements
   * @param {T} value value
   * @param {number} index index in array
   * @param {T[]} obj the array
   * @returns {boolean} if this is the one we want
   */

  /**
     * Utility function to contact Glympse API and auto-add access token.
     * @param {string} endpointAndQuery API endpoint and querystring, no leading slash.
     * @param {RequestInit} config fetch request configuration
     * @param {boolean} addAccessToken add the token or not? set false for e.g. login request.
     * @returns {Promise<any>} Promise that resolves to JSON response if everything worked ("response" part of api response without result and meta)
     * @throws {Error} If API errors occur, a string with error detail is thrown.
     */
  async function glympseApi(endpointAndQuery, config = {}, addAccessToken = true) {
    if (addAccessToken) {
      if (!config.headers) { config.headers = {}; }
      config.headers.Authorization = `Bearer ${accesstoken}`;
    }
    const response = await fetch(`https://api.glympse.com/v2/${endpointAndQuery}`, config);
    if (!response.ok) {
      throw new Error(`${response.status} - ${response.statusText}: ${await response.text()}`);
    }
    return response.json().then((v) => {
      if (v.result && v.result !== 'ok') {
        if (v.meta && v.meta.error) {
          throw new Error(`${v.meta.error}${v.meta.error_detail ? ` - ${v.meta.error_detail}` : ''}`);
        } else {
          throw new Error(v.result);
        }
      } else {
        return v.response ?? v;
      }
    });
  }

  // #region
  function getFormattedDate(date, prefomattedDate = false, hideYear = false) {
    const day = date.getDate();
    const month = date.getMonth();
    const year = date.getFullYear();
    const hours = date.getHours();
    let minutes = date.getMinutes();

    if (minutes < 10) {
      minutes = `0${minutes}`;
    }

    if (prefomattedDate) {
      // 今日の 10:20
      // 昨日の 10:20
      return `${prefomattedDate}の ${hours}:${minutes}`;
    }

    if (hideYear) {
      // 1月10日 10:20
      return `${month}月${day}日 ${hours}:${minutes}`;
    }

    // 2024年1月10日 10:20
    return `${year}年 ${month}月 ${day}日 ${hours}:${minutes}`;
  }

  // --- Main function
  function timeAgo(dateParam) {
    if (!dateParam) {
      return null;
    }

    const date = typeof dateParam === 'object' ? dateParam : new Date(dateParam);
    const DAY_IN_MS = 86400000; // 24 * 60 * 60 * 1000
    const today = new Date();
    const yesterday = new Date(today - DAY_IN_MS);
    const seconds = Math.round((today - date) / 1000);
    const minutes = Math.round(seconds / 60);
    const isToday = today.toDateString() === date.toDateString();
    const isYesterday = yesterday.toDateString() === date.toDateString();
    const isThisYear = today.getFullYear() === date.getFullYear();

    if (seconds < 5) {
      return '今';
    } if (seconds < 60) {
      return `${seconds} 秒前`;
    } if (seconds < 90) {
      return '数分前';
    } if (minutes < 60) {
      return `${minutes} 分前`;
    } if (isToday) {
      return getFormattedDate(date, '今日'); // Today at 10:20
    } if (isYesterday) {
      return getFormattedDate(date, '昨日'); // Yesterday at 10:20
    } if (isThisYear) {
      return getFormattedDate(date, false, true); // 10. January at 10:20
    }

    return getFormattedDate(date); // 10. January 2017. at 10:20
  }
  // #endregion

  /**
     * Update the popup for a specific {@link Member}
     * @param {Member} m - the member to update
     */
  function updatePopup(m) {
    let htmlstring = /* html */`
      <div style="width:180px;">
      <h3 style="text-align:center;">${m.name}</h3>
    `;
    if (m.avatar) {
      htmlstring += /* html */`
        <img src="${m.avatar}" width="90" height="90" style="margin-left:45px;">
      `;
    }
    if (m.expired) { htmlstring += '<br>期限切れ'; }

    htmlstring += /* html */`
      <dl>
      <dt>移動方法:</dt>
      <dd>${travelMode[m.travelType]}</dd>
    `;

    if (typeof (m.speed) === 'number') {
      htmlstring += /* html */`
        <dt>速度:</dt>
        <dd>${m.speed.toFixed(1)} km/h</dd>
      `;
    }
    htmlstring += /* html */`
      <dt>最終更新:</dt>
      <dd>${timeAgo(m.last)}</dd>
      </dl>
      </div>
    `;
    m.marker.setPopupContent(htmlstring);
  }
  //
  // Update Loop
  //
  function startUpdateLoop() {
    updateLoop = setInterval(async () => {
      const groups = await glympseApi(`groups/${encodeURIComponent(glympsetag)}/events?next=${next}`);
      // beware: events or group response type possible!
      if (groups.type === 'events') {
        next = groups.next;
        groups.items.forEach((item) => {
          if (item.type === 'invite') {
//            debugger;
            // new user sharing
            const existingMember = allMembers.find((m) => m.id === item.member);
            if (existingMember) {
              console.log (`existingMember=${existingMember.name},item.invite=${item.invite}`);
                debugger;
              existingMember.invite = item.invite;
              existingMember.expired = false;
              existingMember.next = 0;
              //existingMember.line.setLatLngs([]);
              const ic = existingMember.marker.getIcon();
              ic.options.className = 'agent-avatar';
              existingMember.marker.setIcon(ic);
              updatePopup(existingMember);
            } else {
              const newMember = {
                id: item.member,
                name: item.member, // user's nickname not known yet, will get sent on user update --> "properties" array (bc. next is 0)
                invite: item.invite,
                next: 0,
                marker: L.marker([0, 0], {
                  title: item.member,
                  draggable: false,
                  icon: L.divIcon({
                    html : "?",
                    iconSize: [40, 40],
                    iconAnchor: [20, 20],
                  }),
                  rotationOrigin: 'center center',
                }).bindPopup().addTo(glympseLayers),
                line: L.polyline([], { color: 'olive', interactive: false }).addTo(glympseLayers),
              };
              allMembers.push(newMember);
              updatePopup(newMember);
            }
          } else {
            console.debug(`unhandled event ${item.type}: `, item);
          }
          // there is type 'join', probably new user watching the glympse tag
          // TODO: is there a type 'leave' event or similar? how exactly is it called? - probably the ticket is set to expired?
        });
      } else {
        console.log (`type=${groups.type}`);
        // type == 'group'
        next = groups.events;
        // TODO: does the response include all members then? i assume so...
        console.debug('present member count: ', allMembers.length, ', received member count: ', groups.members.length);
        groups.members.forEach((m) => {
          const existingMember = allMembers.find((pm) => pm.id === m.id);
          if (existingMember) {
            existingMember.invite = m.invite;
          } else {
            const newMember = {
              id: m.id,
              name: m.id, // user's nickname not known yet, will get sent on user update --> "properties" array (bc. next is 0)
              invite: m.invite,
              next: 0,
              marker: L.marker([0, 0], {
                title: m.name,
                draggable: false,
                icon: L.divIcon({
                    html : "?",
                    iconSize: [40, 40],
                    iconAnchor: [20, 20],
                }),
                rotationOrigin: 'center center',
              }).bindPopup().addTo(glympseLayers),
              line: L.polyline([], { color: 'olive', interactive: false }).addTo(glympseLayers),
            };
            allMembers.push(newMember);
            updatePopup(newMember);
          }
        });
      }

      const tooManyPromises = [];
      allMembers.forEach((m) => {
        if (m.expired) {
            return;
        }
        tooManyPromises.push(glympseApi(`invites/${m.invite}?next=${m.next}&uncompressed=true`).then((response) => {
          // update all member's locations
          if (response.location) {
            const lastLocation = response.location[response.location.length-1];
            m.lastLatLng = [lastLocation[1] / 1000000, lastLocation[2] / 1000000];
            m.marker.setLatLng(m.lastLatLng);

            const latestLocationWithAdditionalInfo = response.location?.findLast((e) => e.length >= 5);
            if (latestLocationWithAdditionalInfo) {
              // speed is null if denied by user, null * 0.036 = 0 ==> check for null before multiplication
              if (typeof latestLocationWithAdditionalInfo[3] === 'number') {
                m.speed = latestLocationWithAdditionalInfo[3] * 0.036;
              }
              m.heading = latestLocationWithAdditionalInfo[4];
            }
          }

          m.next = response.next;
          m.last = new Date(response.last);

          // handle nickname change
          let newNickName;
          if (response.properties && response.properties.findIndex((prop) => prop.n === 'name') !== -1) {
            newNickName = response.properties.find((prop) => prop.n === 'name');
          } else if (response.data && response.data.findIndex((prop) => prop.n === 'name') !== -1) {
            newNickName = response.data.find((prop) => prop.n === 'name');
          }
          if (newNickName) {
            m.name = newNickName.v;
            m.marker.options.title = newNickName.v;
          }

          // handle invite expiry change
          let expired;
          if (response.properties) {
            expired = response.properties.find((prop) => prop.n === 'expired')?.v;
          } else if (response.data) {
            expired = response.data.find((prop) => prop.n === 'expired')?.v;
          }

          if (typeof (expired) === 'boolean') {
            m.expired = expired;
            const ic = m.marker.getIcon();
            if (m.expired) {
              ic.options.className = 'agent-avatar expired';
            } else {
              ic.options.className = 'agent-avatar';
            }
            m.marker.setIcon(ic);
          }

          // avatar change
          m.avatar = response.properties
            ?.find((p) => p.n === 'avatar')
            ?.v
          ?? response.data
            ?.find((p) => p.n === 'avatar')
            ?.v
          ?? m.avatar;

          // travel type change
          m.travelType = response.properties
            ?.find((p) => p.n === 'travel_mode')
            ?.v
            .type
          ?? response.data
            ?.find((p) => p.n === 'travel_mode')
            ?.v
            .type
          ?? m.travelType;

          updatePopup(m);
        }));
      });
      await Promise.all(tooManyPromises);
    }, updateSpeed);
  }

  //
  // fetchInitialData
  //
  async function fetchInitialData() {
    console.log ("fetchInitialData called.");
    let groups;
    try {
      groups = await glympseApi(`groups/${encodeURIComponent(glympsetag)}`);
    } catch (e) {
      if (e.message) {
        alert(/* html */`Glympseタグの読み込み失敗:<br>
        <code>${e.message}</code><br>
        有効なGlympseタグを指定してください`, true);
      } else {
        alert(e);
      }
      return;
    }
    allMembers = groups.members;
    next = groups.events + 1;
    const tooManyPromises = [];
    //const latLngs = [];
    allMembers.forEach((m) => {
      let thisMemberHasError = false;
      tooManyPromises.push(glympseApi(`invites/${m.invite}?uncompressed=true`)
      .catch((e) => {
        thisMemberHasError = true;
        if (e.message && !e.message.includes('Unable to retrieve invite_code')) {
          alert(e.message);
        } else if (!e.message) {
          alert(e);
        }
        allMembers.splice(allMembers.indexOf(m), 1);
      }).then((response) => {
        if (thisMemberHasError) {
            return;
        }
        const latLngs = [];
        if (response.location !== undefined){
          response.location.forEach((l) => {
              latLngs.push([l[1] / 1000000, l[2] / 1000000]);
          });
        }
        const latestLocationWithAdditionalInfo = response.location?.findLast((e) => e.length >= 5);
        if (latestLocationWithAdditionalInfo) {
          // speed is null if denied by user, null * 0.036 = 0 ==> check for null before multiplication
          if (typeof latestLocationWithAdditionalInfo[3] === 'number') {
            m.speed = latestLocationWithAdditionalInfo[3] * 0.036;
          }
          m.heading = latestLocationWithAdditionalInfo[4];
        }

        m.name = response.properties.find((p) => p.n === 'name').v;
        m.next = response.next;
        m.last = new Date(response.last);
        m.expired = response.properties.find((p) => p.n === 'expired')?.v;
        m.avatar = response.properties.find((p) => p.n === 'avatar')?.v;
        m.travelType = response.properties.find((p) => p.n === 'travel_mode')?.v?.type;
//        m.line = L.polyline(latLngs, { color: 'olive', interactive: false }).addTo(glympseLayers);
        let className = 'agent-avater';
        if (m.expired) {
            className += ' expired';
        }
        m.lastLatLng = (latLngs.length > 0) ? latLngs[latLngs.length - 1] : [0,0];
        m.marker = L.marker(m.lastLatLng , {
          opacity : (latLngs.length > 0) ? 1.0 : 0.0,
          title: m.name,
          draggable: false,
          icon: L.divIcon({
            html : `<div><img src="${m.avatar}"></img></div>`,
            className : className,
            iconSize: [40, 40],
            iconAnchor: [20, 20],
          }),
          rotationOrigin: 'center center',
        }).bindPopup().addTo(glympseLayers);
        updatePopup(m);
      }));
    });
    await Promise.all(tooManyPromises);
    startUpdateLoop();
  }

  async function logIntoApi() {
    try {
      const response = await glympseApi(
        `account/login?id=${encodeURIComponent(user)}&password=${encodeURIComponent(password)}&api_key=${apiKey}`,
        { method: 'POST' },
        false,
      );
      accesstoken = response.access_token;
      // TODO: handle expires_in
      /*
          * probably not need to handle: according to the docs, this value is in seconds.
          * when trying i got a value of 632720000.
          * even if this would be milliseconds, it would last a bit more than a week...
        */
      if (glympsetag) {
          fetchInitialData();
      }
    } catch (/** @type {Error} */ e) {
      alert(/* html */`login unsuccessful:<br><code>${e.message}</code>`, true);
    }
  }

  function openSettings() {
    const dial = window.dialog({
      html: /* html */`
        <h3>API 設定</h3>
        <div>
          <label for="glympseID">ユーザ名:</label>
          <input type="text" id="glympseID" value="${user ?? ''}" required>
        </div>
        <div>
          <label for="glympsePassword">パスワード:</label>
          <input type="text" id="glympsePassword" value="${password ?? ''}" required>
        </div>
        <div>
          <label for="glympseApiToken">API token:</label>
          <input type="text" id="glympseApiToken" value="${apiKey ?? ''}" required>
          <p>APIトークンを取得するには...</p>
          <ul>
            <li>Get yourself a trial token at <a href="https://developer.glympse.com/account/apps" target="_blank">Glympse Developers</a></li>
            <li>Open a Glympse tag in browser with dev tools open.
              Look for the login network request to the Glympse API and use the Glympse viewer's token.<br>
              Note that this is against Glympse's ToS
            </li>
          </ul>
        </div>
        <h3>Other settings</h3>
        <div>
          <label for="glympsetag">Glympse tag:</label>
          !<input type="text" id="glympsetag" title="don't enter the '!'" value="${glympsetag ?? ''}" required>
        </div>
        <div>
          <label for="refreshrate">update speed:</label>
          <input type="number" id="refreshrate" min="1000" value="${updateSpeed ?? 5000}" required>
          <p>refresh rate in milliseconds.</p>
        </div>
      `,
      buttons: [{
        text: 'Save',
        click: () => {
          const settings = {
            user: document.getElementById('glympseID').value,
            password: document.getElementById('glympsePassword').value,
            apiKey: document.getElementById('glympseApiToken').value,
            glympsetag: document.getElementById('glympsetag').value,
            updateSpeed: document.getElementById('refreshrate').value,
          };
          if (!/^[\p{L}_\d]*$/u.test(settings.glympsetag)) {
            settings.glympsetag = null;
            alert(`Glympse tag invalid. Only letters, digits or underscore allowed.
              Don't add the '!'.
              Unsetting it...`);
          }
          if (!settings.updateSpeed) { settings.updateSpeed = 5000; }
          if (settings.updateSpeed < 1000) { settings.updateSpeed = 1000; }
          clearInterval(updateLoop);
          user = settings.user;
          password = settings.password;
          apiKey = settings.apiKey;
          glympsetag = settings.glympsetag;
          updateSpeed = settings.updateSpeed;
          localStorage.setItem('plugin-glympse', JSON.stringify(settings));
          glympseLayers.clearLayers();
          allMembers = [];
          if (user && password && apiKey && glympsetag) {
            logIntoApi();
          } else {
            window.map.removeLayer(glympseLayers);
          }
          dial.dialog('close');
        },
      }],
      title: 'Glympse Settings',
    });
  }

  // #region Setup
  const setup = function setup() {
    // init script
    glympseLayers = new L.LayerGroup(null, { attribution: 'Realtime locations by <a href="https://glympse.com">Glympse</a>' });
    const toolboxLink = document.getElementById('toolbox').appendChild(document.createElement('a'));
    toolboxLink.addEventListener('click', openSettings);
    toolboxLink.innerText = 'Glympse Settings';
    toolboxLink.type = 'button';

    const styleElem = document.head.appendChild(document.createElement('style'));
    styleElem.innerText = markerStyle;
    // glympseLayers.addTo(map)

    // read settings from local storage
    const jsonstring = localStorage.getItem('plugin-glympse');
    if (jsonstring) {
      const settings = JSON.parse(jsonstring);
      user = settings.user;
      password = settings.password;
      apiKey = settings.apiKey;
      glympsetag = settings.glympsetag;
      updateSpeed = settings.updateSpeed;
    }

    window.map.addEventListener('overlayadd', (e) => {
      if (e.name === 'Glympse') {
        if (user && password && apiKey && glympsetag) {
          if (!accesstoken) {
            logIntoApi();
          } else {
            fetchInitialData();
          }
        } else {
          alert('invalid settings.\nPlease complete them.', false, openSettings);
        }
      }
    });

    window.map.addEventListener('overlayremove', (e) => {
      if (e.name === 'Glympse') {
        if (updateLoop) {
          clearInterval(updateLoop);
        }
        allMembers = [];
        glympseLayers.clearLayers();
      }
    });

    window.addLayerGroup('Glympse', glympseLayers);

    if (window.isLayerGroupDisplayed('Glympse')) {
      if (!user || !password || !apiKey) {
        window.map.removeLayer(glympseLayers);
        return;
      }

      // log in to glympse api
     // logIntoApi();
    }
  };
  // #endregion

  // PLUGIN END //////////////////////////////////////////////////////////

  // add the script info data to the function as a property
  setup.info = PluginInfo;
  if (!window.bootPlugins) window.bootPlugins = [];
  window.bootPlugins.push(setup);
  // if IITC has already booted, immediately run the 'setup' function
  if (window.iitcLoaded && typeof setup === 'function') setup();
}

/*
 * wrapper end
 * inject code into site context
 */
const script = document.createElement('script');
const info = {};
if (typeof GM_info !== 'undefined' && GM_info && GM_info.script) {
  info.script = {
    version: GM_info.script.version,
    name: GM_info.script.name,
    description: GM_info.script.description,
  };
}
script.appendChild(document.createTextNode(`(${wrapper})(${JSON.stringify(info)});`));
(document.body || document.head || document.documentElement).appendChild(script);
