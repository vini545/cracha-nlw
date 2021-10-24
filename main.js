const linksSocialMedia = {
  github: 'vini545',
  youtube: 'UCCxG3VHOTpa7cRFIZ5_JRoQ',
  instagram: 'velociraptor_chainsaw',
  facebook: 'vinicius.cruz.1481',
  twitter: ''
}
function changeSocialMedia() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')
    li.children[0].href = `https://${social}.com/${linksSocialMedia[social]}`
  }
}
changeSocialMedia()

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${linksSocialMedia.github}`

  fetch(url)
    .then(Response => Response.json())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userGit.href = data.html_url
      fotoGitHub.src = data.avatar_url
      userGitName.textContent = data.login
    })
}
getGitHubProfileInfos()
