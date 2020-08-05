const Discord = require('discord.js');
const client = new Discord.Client();
const token = process.env.token;
const welcomeChannelName = "📯알림📯";
const byeChannelName = "📯알림📯";
const welcomeChannelComment = "님! 마인리니지 디스코드에 오신 것을 환영합니다!";
const byeChannelComment = "님이 마인리니지 디스코드에서 나가신다니 아쉽네요,";

client.on('ready', () => {
  console.log('mine leongue ch bot has enabled');
  client.user.setActivity('"마인리니지 도움말"을 쳐서 도움말을 볼 수 있습니다.', {type : 'WACTHING'});
});

client.on("guildMemberAdd", (member) => {
  const guild = member.guild;
  const newUser = member.user;
  const welcomeChannel = guild.channels.find(channel => channel.name == welcomeChannelName);

  welcomeChannel.send(`<@${newUser.id}> ${welcomeChannelComment}\n`);

  member.addRole(guild.roles.find(role => role.name == "기본유저"));
});

client.on("guildMemberRemove", (member) => {
  const guild = member.guild;
  const deleteUser = member.user;
  const byeChannel = guild.channels.find(channel => channel.name == byeChannelName);

  byeChannel.send(`<@${deleteUser.id}> ${byeChannelComment}\n`);
});

client.on('message', (message) => {
  if(message.author.bot) return;

  if(message.content === 'test 안녕') {
    message.reply('안녕하세요');
  }

  if(message.content === '..update') {
    message.channel.send('@everyone 새로운 업데이트가 나왔어요! 모두 📗-업데이트_내역 채널에서 "마인리니지 업데이트 내역" 을 쳐서 확인해 봅시다! ');
  }

  if(message.content == '마인리니지 도움말') {
    let img = '';
    let embed = new Discord.RichEmbed()
      .setTitle('마인리니지 서버 봇 도움말')
      .setURL('')
      .setAuthor('', img, '')
      .setThumbnail(img)
      .addBlankField()
      .setColor('#186de6')
      .addField('마인리니지 업데이트 내역', '마인리니지 서버의 업데이트 내역을 확인할 수 있습니다.', true)
      .addField('마인리니지 최신 업데이트 내역', '마인리니지 서버의 최신 업데이트 내역을 확인할 수 있습니다.')
      .addField('마인리니지 봇 업데이트 내역', '마인리니지 봇의 업데이트 내역을 확인할 수 있습니다.')
      .addField('마인리니지 규칙', '마인리니지 서버 디스코드의 규칙을 볼 수 있습니다.')
      .addField('마인리니지 전체공지 메시지', '관리자 권한이 있다면 DM으로 전체공지를 보낼 수 있습니다.')
      .addField('마인리니지 투표 투표주제.투표1.투표2.~', '봇을 이용해 투표를 할 수 있습니다.')
      .addBlankField()
      .setTimestamp()
      .setFooter('By. kimhui9027', img)

    message.channel.send(embed)
  } else if(message.content == 'embed2') {
    let helpImg = 'https://images-ext-1.discordapp.net/external/RyofVqSAVAi0H9-1yK6M8NGy2grU5TWZkLadG-rwqk0/https/i.imgur.com/EZRAPxR.png';
    let commandList = [
      {name: 'ping', desc: '현재 핑 상태'},
      {name: 'embed', desc: 'embed 예제1'},
      {name: 'embed2', desc: 'embed 예제2 (help)'},
      {name: '!전체공지', desc: 'dm으로 전체 공지 보내기'},
    ];
    let commandStr = '';
    let embed = new Discord.RichEmbed()
      .setAuthor('Help of 콜라곰 BOT', helpImg)
      .setColor('#186de6')
      .setFooter(`콜라곰 BOT ❤️`)
      .setTimestamp()
    
    commandList.forEach(x => {
      commandStr += `• \`\`${changeCommandStringLength(`${x.name}`)}\`\` : **${x.desc}**\n`;
    });

    embed.addField('Commands: ', commandStr);

    message.channel.send(embed)
  }

  if(message.content == '마인리니지 규칙') {
    let img = '';
    let embed = new Discord.RichEmbed()
      .setTitle('마인리니지 서버 디스코드 규칙')
      .setURL('')
      .setAuthor('', img, '')
      .setThumbnail(img)
      .addBlankField()
      .setColor('#ff00ff')
      .addField('규칙들', '1. 유저가 뮤직봇으로 듣고있던 노래 강제 스킵은 금지됩니다\n   Forcing users to skip a song they were listening to on the musicbot is prohibited.\n   ユーザーがミュージックボットで聴いていた歌の強制スキップは禁止されます。\n \n2. 이서버에 자기봇 추가 해달라고 구걸은 금지됩니다\n   You are not allowed to beg for additional magnetic bots on this server.\n   このサーバーに自分のボットを追加してほしいと物乞いは禁止されます。\n \n3.명령어를 커맨드 채팅방이 아닌 다른 채팅방에서 사용하는것은 금지됩니다\n   The use of commands in chat rooms other than command chat rooms is prohibited.\n   コマンドチャットルームではない他のチャットルームで使用することは禁止されます。\n \n4. 투표할때 증복 투표, 이모지 추가 하는것은 금지됩니다\n   Voting for increase or increase is prohibited when voting, and adding emoji.\n   投票の際、贈服投票、叔母紙を追加することは禁止されます。\n\n5. 허위 유저 신고는 금지됩니다\n   False user reports are prohibited.\n   虚偽のユーザー申告は禁止されます。\n\n6.무단 초대는 금지됩니다 \n   Invitations to the military are prohibited.\n   無断招待は禁止されます。\n\n각각 1번마다 경고 1회씩 입니다 만약 3번의 경고가 누적으로 쌓인다면 추방당하니 조심해주세요\n   One warning each time. If three warnings accumulate, you will be deported.れぞれ1回ごとに警告1回ずつです もし3回の警告が累積でたまれば追放されますのでご注意ください。')
      .addBlankField()
      .setTimestamp()
      .setFooter('규칙이니 잘 지켜주시기 바랍니다.', img)

    message.channel.send(embed)
  } else if(message.content == 'embed2') {
    let helpImg = 'https://images-ext-1.discordapp.net/external/RyofVqSAVAi0H9-1yK6M8NGy2grU5TWZkLadG-rwqk0/https/i.imgur.com/EZRAPxR.png';
    let commandList = [
      {name: 'ping', desc: '현재 핑 상태'},
      {name: 'embed', desc: 'embed 예제1'},
      {name: 'embed2', desc: 'embed 예제2 (help)'},
      {name: '!전체공지', desc: 'dm으로 전체 공지 보내기'},
    ];
    let commandStr = '';
    let embed = new Discord.RichEmbed()
      .setAuthor('Help of 콜라곰 BOT', helpImg)
      .setColor('#186de6')
      .setFooter(`콜라곰 BOT ❤️`)
      .setTimestamp()
    
    commandList.forEach(x => {
      commandStr += `• \`\`${changeCommandStringLength(`${x.name}`)}\`\` : **${x.desc}**\n`;
    });

    embed.addField('Commands: ', commandStr);

    message.channel.send(embed)
  }

  if(message.content == '마인리니지 업데이트 내역') {
    let img = '';
    let embed = new Discord.RichEmbed()
      .setTitle('마인리니지 서버 업데이트 내역')
      .setURL('')
      .setAuthor('', img, '')
      .setThumbnail(img)
      .addBlankField()
      .setColor('#fff000')
      .addField('2020.07.05', '1.TAB키를 눌렀을때 자신의 닉네임앞에 칭호를 넣을수있게했지렁\n2.전광판에 레벨,길드명,등급을 표시하는것이 생겼다궁\n3./등급 목록 을 치면 등급들이 나온다굿!!!', true)
      .addField('버전', 'pre-152.1.1')
      .addBlankField()
      .setTimestamp()
      .setFooter('', img)

    message.channel.send(embed)
  } else if(message.content == 'embed2') {
    let helpImg = 'https://images-ext-1.discordapp.net/external/RyofVqSAVAi0H9-1yK6M8NGy2grU5TWZkLadG-rwqk0/https/i.imgur.com/EZRAPxR.png';
    let commandList = [
      {name: 'ping', desc: '현재 핑 상태'},
      {name: 'embed', desc: 'embed 예제1'},
      {name: 'embed2', desc: 'embed 예제2 (help)'},
      {name: '!전체공지', desc: 'dm으로 전체 공지 보내기'},
    ];
    let commandStr = '';
    let embed = new Discord.RichEmbed()
      .setAuthor('Help of 콜라곰 BOT', helpImg)
      .setColor('#186de6')
      .setFooter(`콜라곰 BOT ❤️`)
      .setTimestamp()
    
    commandList.forEach(x => {
      commandStr += `• \`\`${changeCommandStringLength(`${x.name}`)}\`\` : **${x.desc}**\n`;
    });

    embed.addField('Commands: ', commandStr);

    message.channel.send(embed)
  }

  if(message.content == '마인리니지 최신 업데이트 내역') {
    let img = '';
    let embed = new Discord.RichEmbed()
      .setTitle('마인리니지 서버 최신 업데이트 내역')
      .setURL('')
      .setAuthor('', img, '')
      .setThumbnail(img)
      .addBlankField()
      .setColor('#aaff00')
      .addField('2020.07.06', '1. 디스코드 <-> 서버 채팅연동')
      .addField('버전', 'pre-152.1.1')
      .addBlankField()
      .setTimestamp()
      .setFooter('', img)

    message.channel.send(embed)
  } else if(message.content == 'embed2') {
    let helpImg = 'https://images-ext-1.discordapp.net/external/RyofVqSAVAi0H9-1yK6M8NGy2grU5TWZkLadG-rwqk0/https/i.imgur.com/EZRAPxR.png';
    let commandList = [
      {name: 'ping', desc: '현재 핑 상태'},
      {name: 'embed', desc: 'embed 예제1'},
      {name: 'embed2', desc: 'embed 예제2 (help)'},
      {name: '!전체공지', desc: 'dm으로 전체 공지 보내기'},
    ];
    let commandStr = '';
    let embed = new Discord.RichEmbed()
      .setAuthor('Help of 콜라곰 BOT', helpImg)
      .setColor('#186de6')
      .setFooter(`콜라곰 BOT ❤️`)
      .setTimestamp()
    
    commandList.forEach(x => {
      commandStr += `• \`\`${changeCommandStringLength(`${x.name}`)}\`\` : **${x.desc}**\n`;
    });

    embed.addField('Commands: ', commandStr);

    message.channel.send(embed)
  }

  if(message.content == '마인리니지 봇 업데이트 내역') {
    let img = '';
    let embed = new Discord.RichEmbed()
      .setTitle('마인리니지 봇 업데이트 내역')
      .setURL('')
      .setAuthor('', img, '')
      .setThumbnail(img)
      .addBlankField()
      .setColor('#ff0000')
      .addField('2020.07.06', '업데이트 내역 완성', true)
      .addField('버전', 'ver. 1.2.1', true)
      .addBlankField()
      .setTimestamp()
      .setFooter('', img)

    message.channel.send(embed)
  } else if(message.content == 'embed2') {
    let helpImg = 'https://images-ext-1.discordapp.net/external/RyofVqSAVAi0H9-1yK6M8NGy2grU5TWZkLadG-rwqk0/https/i.imgur.com/EZRAPxR.png';
    let commandList = [
      {name: 'ping', desc: '현재 핑 상태'},
      {name: 'embed', desc: 'embed 예제1'},
      {name: 'embed2', desc: 'embed 예제2 (help)'},
      {name: '!전체공지', desc: 'dm으로 전체 공지 보내기'},
    ];
    let commandStr = '';
    let embed = new Discord.RichEmbed()
      .setAuthor('Help of 콜라곰 BOT', helpImg)
      .setColor('#186de6')
      .setFooter(`콜라곰 BOT ❤️`)
      .setTimestamp()
    
    commandList.forEach(x => {
      commandStr += `• \`\`${changeCommandStringLength(`${x.name}`)}\`\` : **${x.desc}**\n`;
    });

    embed.addField('Commands: ', commandStr);

    message.channel.send(embed)
  }

  if(message.content.startsWith('마인리니지 전체공지')) {
    if(checkPermission(message)) return
    if(message.member != null) { // 채널에서 공지 쓸 때
      let contents = message.content.slice('마인리니지 전체공지'.length);
      message.member.guild.members.array().forEach(x => {
        if(x.user.bot) return;
        x.user.send(`<@${message.author.id}> ${contents}`);
      });
  
      return message.reply('공지를 전송했습니다.');
    } else {
      return message.reply('채널에서 실행해주세요.');
    }
  };

});

function checkPermission(message) {
  if(!message.member.hasPermission("MANAGE_MESSAGES")) {
    message.channel.send(`<@${message.author.id}> ` + "명령어를 수행할 관리자 권한을 소지하고 있지않습니다.")
    return true;
  } else {
    return false;
  }
}

client.login(token);
