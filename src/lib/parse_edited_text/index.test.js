"use strict";
var parseEditedText = require("./index.js").parse;
var parseSpeakers = require("./index.js").parseSpeakers;


var exampleText2 = `~Donald Trump -1~

Well    , 
thank 
you 
very 
much. 
It 
was 
a 
great 
trip 
and 
a 
beautiful 
place. 
I've 
been 
to 
Puerto 
Rico 
many 
times 
as, 
I 
think, 
most 
of 
you 
have 
known. 
And 
I've 
always 
loved 
it. 
And 
your 
weather 
is 
second 
to 
none, 
but 
every 
once 
in 
a 
while 
you 
get 
hit. 
And 
you 
really 
got 
hit 
-- 
there's  
no 
question 
about 
it. 



~Donald Trump 0~

Well, thank you very much. It was a great trip and a beautiful place. I've been to Puerto Rico many times as, I think, most of you have known. And I've always loved it. And your weather is second to none, but every once in a while you get hit. And you really got hit -- there's no question about it.

~Donald Trump 1~

I want to thank, in particular, some of the folks that come here where really great danger was involved, right at the beginning. I have to start with Brock. Where's Brock? Brock -- Brock Long has been through a lot.

{ some section header text }

~Donald Trump 2~

We gave him an A-plus in Texas. We thought he could rest for a couple of days, but before he got any rest, he had Florida, right? And you had 

 Louisiana, and you had other places. And, by the way, Louisiana -- we don't say it often -- but Louisiana got hit very hard also, and they've been fantastic.

~Donald Trump 3~

But then he came to Florida, and that we gave him another A-plus.

~Donald Trump 4~

And then, all of a sudden, we said there's another one heading out to Puerto Rico and to the U.S. Virgin Islands. But it wasn't one -- it was two.

{ some section header text 2 }

~Donald Trump 5~

And I was going to be here a week ago, if you remember, and that was the day of the hurricane -- that was the day of the second hurricane.

~Donald Trump 6~

So Brock has been unbelievable. And this has been the toughest one. This has been a Category 5, which few people have ever even heard of -- a Category 5 hitting land.

~Donald Trump 7~

But it hit land -- and, boy, did it hit land.

~Donald Trump~

So I want to thank you. I want to thank Elaine. Elaine, thank you very much.

~Donald Trump~

Fantastic -- Acting Secretary. Elaine Duke has been incredible. Tom Bossert is here someplace.

~Donald Trump~

Tom, great job. Great job.

~Donald Trump~

And to all of my people -- and I have to say, General Buchanan got here a few days ago, and there's no doubt about it you are a general. There's a reason you're a general, right? But he's no games. I said, give me a general; I don't want to have any -- I don't want to have a general that plays games.

~Donald Trump~

And you've done a fantastic job. The whole team has been amazing.

~Donald Trump~

vour governor has been -- who I didn't know; I heard very good things about him. He's not even from my party, and he started right at the beginning appreciating what we did. And he was tremendously supportive, and he knew the level of problem that you had at the beginning, before, and the level -- what happened with respect to the tremendous storms that hit your beautiful island.

~Donald Trump~

And, Governor, I just want to tell you that, right from the beginning, this governor did not play politics. He didn't play it at all. He was saying it like it was, and he was giving us the highest grades.

~Donald Trump~

And I want to -- on behalf of our country, I want to thank you. [Applause]

~Donald Trump~

I also want to thank your congresswoman, who actually represents the largest number of people of any congressperson in the United States. I know that. It's 3.5 million people, Jenniffer, right? So Congresswoman Jenniffer González-Colón, who I've watched the other day and she was saying such nice things about all of the people that have worked so hard.

~Donald Trump~

Jenniffer, do you think you could say a little bit what you said about us today? And it's not about me, it's about these incredible people, from the military to FEMA, to first responders. I mean, I've never seen people working so hard in my life. Perhaps you could say, Congresswoman?

~Jennifer Gonzalez Colon~

Thank you, Mr. President. The first thing is that, before we were hit by Maria, we were hit by Hurricane Irma.

~Jennifer Gonzalez Colon~

And during that time, before the hurricane, here was FEMA acting together with a lot of employees. More than 4,000 people were here in the island from the different branches of the military -- HHS, Navy, Army, FEMA -- and all the staff working together before the hurricane hit. They were here before, during, after the first hurricane, and they continued to stay on the island, boots on the ground.

~Jennifer Gonzalez Colon~

During Maria -- same thing.

~Jennifer Gonzalez Colon~

I think we never got the level of communication between the federal government and the government like never before. And we are in the path of the hurricane, so we are used to receiving hurricanes, but never before a Category 5. The amount of devastation is unheard of.

~Jennifer Gonzalez Colon~

But during all this time, we got the federal government by our side, doing the job of the people here, like you in the military, doing all that has been asked. All the questions and requests that the governor did, the President and his Cabinet accomplished it and send more people, and has continued to send in more people -- trucks, drivers, and resources. Thank you, Mr.

~Jennifer Gonzalez Colon~

President, for all you've been doing for the island.

~Donald Trump~

Well, I want to thank you because you were really generous. And I saw those comments, and everybody saw those comments, and we really appreciate it.

~Donald Trump~

And, you know, it's so important, when you have men and women that have worked so hard and so long, and many of them came from two other catastrophic hurricanes. They came from Texas, they came from Louisiana, they came from Florida, and there was no -- how many nights' rest have you gotten? Zero in the last month, right?

~Audience Member~

This is day 43.

~Donald Trump~

Well, we're going to keep them for another couple of weeks. And by that time, I think -- well -- come here. Special guy, I will tell you -- special.

~Donald Trump~

Really good. [Applause]

~Donald Trump~

I also -- in addition to Tom, I also want to thank Linda McMahon, Small Business. I always joke -- I said, she's in charge of small business, but small business is massive business when you add it all up. And she has done an incredible job -- built a great company with her husband, Vince McMahon.

~Donald Trump~

And I wanted her so badly for this position because there's nobody that knows how to build a company like those and, let me tell you, like this woman. She has been amazing in business, and now she's doing an incredible job as the Administrator. We want to thank you, Linda, very much. [Applause]

~Donald Trump~

And Mick Mulvaney is here -- right there -- and Mick is in charge of a thing called "budget."" Now

~Donald Trump~

If you look at the -- every death is a horror. But if you look at a real catastrophe like Katrina, and you look at the tremendous hundreds and hundreds and hundreds of people that died, and you look at what happened here with, really, a storm that was just totally overpowering -- nobody has ever seen anything like this. What is your death count, as of this moment -- 17?

~Audience Member~

Sixteen certified.

~Donald Trump~

Sixteen people certified. Sixteen people versus in the thousands. You can be very proud of all of your people, all of our people working together.

~Donald Trump~

Sixteen versus literally thousands of people. You can be very proud. Everybody around this table and everybody watching can really be very proud of what's taken place in Puerto Rico.

~Donald Trump~

I also want to pay a very special thanks to the Navy. Who's here from the Navy? Who do we have, General? Who do we have? What a job. So you have ships all over the place? I saw them flying in.

~Donald Trump~

I said, boy, this looks like very big stuff. And the job you've done getting things here. There are no docks.

~Donald Trump~

There have been -- we're just in the process of opening them up. They were just devastated. But there are no docks, no nothing.

~Donald Trump~

And the way you got this stuff on shore is incredible.

~Donald Trump~

So I want to thank the Navy. Would you like to say something on behalf of the Navy? [Applause]

~Navy Representative~

Sir, your Navy and Marine Corps team was here to respond and [Inaudible] immediately deployed -- four Navy ships, get here, and handle anything that happened in Irma, and then immediately repositioned and was able to respond to Puerto Rico right after Maria.

~Navy Representative~

So the Navy and Marine Corps team [Inaudible] and saved lives and coordinated with FEMA, with the governor of Puerto Rico, and to demonstrate our ability to come from the sea, air, and land. Thank you very much.

~Donald Trump~

Thank you. And thank you very much. And I don't have to even mention the Marines because we have General Kelly. Where's General Kelly?

~Donald Trump~

Where is our General Kelly? He likes to keep a low profile. Look at him sitting in the back, but, boy, is he watching. You have no idea how he's -- General Kelly, come up here. So General Kelly is a four-star. Not a bad general, right? You don't get any better than General Kelly.

~Donald Trump~

But on behalf of the Marines, I'll tell you, they've done some job, General.

~Donald Trump~

Now, can we also mention Army? And can we also mention some people that I really got to know and respect even more in Texas, and that's the Coast Guard?

~Donald Trump~

What a job the Coast Guard has done throughout this whole -- throughout this whole ordeal. [Applause] They would go right into the middle of that -- I mean, I don't know, I wouldn't want to be doing it, but I want to thank everybody. I want to thank the Coast Guard.

~Donald Trump~

They are special, special, very brave people.

~Donald Trump~

And a lot of people got to see the real Coast Guard during this incredible trouble, and especially I think here and in Texas was incredible what they did. So thank you all very much. Thank you very much.

~Donald Trump~

We appreciate it. Really appreciate it.

~Donald Trump~

Would you like to say something on behalf of your men and women?

~Air Force Representative~

Sir, I'm representing the Air Force.

~Donald Trump~

No, I know that.

~Air Force Representative~

It's been a tremendous team effort partnering with FEMA and NORTHCOM, providing support now [Inaudible] also to U.S. Virgin Islands and to Puerto Rico, specifically trying to open up the airfields so that we can get -- as an island -- get the majority of the supplies and [Inaudible] with the people and personnel setting up across the island, set up logistics networks so we could really get to people that are the most hurt and devastated by the catastrophe.

~Donald Trump~

And the runways now are pretty open?

~Air Force Representative~

Yes, sir. We have four major runways that are fully open and operational; flown about 700-plus strategic airlift sorties to and from OCONUS, [Inaudible] Puerto Rico to provide life-sustaining support.

~Donald Trump~

Amazing job. Amazing job. So amazing that we're ordering hundreds of millions of dollars' worth of new airplanes for the Air Force, especially the F-35.

~Donald Trump~

Do you like the F-35?

~Air Force Representative~

[Inaudible] game-changing technology, awesome airplane.

~Donald Trump~

I said, how does it do it in fights? And how do they do in fights with the F-35? They said, we do very well. You can't see it. Literally you can't see it.

~Donald Trump~

So it's hard to fight a plane that you can't see, right?

~Air Force Representative~

Sir, we like that.

~Donald Trump~

But that's an expensive plane that you can't see. And as you probably heard, we cut the price very substantially -- something that other administrations would never have done, that I can tell you. So thank you very much.

~Donald Trump~

Where is the Coast Guard? Who can speak on behalf of the Coast Guard? Who can speak? Where is our Coast Guard representative?

~Audience Member~

Coast Guard officer right here.

~Donald Trump~

Come here, get over here. Come here, come here. On behalf of the Coast Guard, just say a few words.

~Donald Trump~

Your people have been amazing. Go ahead.

~Coast Guard Officer~

I don't think there's anything that the men and women of the Coast Guard would rather do than help the people of Puerto Rico, our fellow American citizens. For us, this is what we get to do on a daily basis. And getting to help our fellow citizens is just what our duty is all about.

~Coast Guard Officer~

So it's our pleasure to be here, sir.

~Donald Trump~

Well, in Texas, it came in, it did devastation, then went right out into the coast, then it came in and out. It came in three times. It would load up with water and come in.

~Donald Trump~

Nobody has ever seen water like that.

~Donald Trump~

And the Coast Guard would follow it. It goes in, and they'd be right behind it, and then they'd move. They saved 16,000 lives in Texas.

~Coast Guard Officer~

Yes, sir.

~Donald Trump~

Hard to believe -- between the helicopters and all of them. But the Coast Guard itself saved in Texas 16,000 lives, and they went right through that hurricane. And there aren't too many people who would have done it, believe me.

~Donald Trump~

Would you thank everybody for me?

~Coast Guard Officer~

Yes, sir. Thank you.

~Audience Member~

Mr. President, we also have our Customs and Border Protection sitting up over here.

~Donald Trump~

Say a few words. Please, say a few words. Customs and Border Protection, say a few words, please.

~Donald Trump~

Don't be shy. What I would like to do -- you want to stand up? Go ahead. That's okay.

~Donald Trump~

Stand up. Go ahead.

~Audience Member~

[Inaudible]

~Donald Trump~

Okay. You did a great job. I just want to also add Rick Perry is here someplace.

~Donald Trump~

Rick -- governor of Texas for many years, 14 years -- did a great job, head of Energy. And Scott Pruitt from Environmental is here and doing an amazing -- really an amazing job. We appreciate it, fellas.

~Donald Trump~

Thank you very much. Governor, would you say a few words?

~Ricardo Rossello~

Of course. Well, first of all, Mr. President, thank you for being here.

~Ricardo Rossello~

Your presence over here with Cabinet members support the notion that we've been talking about: that this is a united effort. This is a united effort. We need to work together in order to overcome the many challenges that we have here in Puerto Rico.

~Ricardo Rossello~

I want to personally thank you, Mr. President, because over the course of the past week you have called essentially every day to make sure we have what we need, to make sure that the resources are over here.

~Ricardo Rossello~

And I want to let the people of Puerto Rico and the people on the United States know that you have always responded to us. And although this is big challenge, we are convinced that working together with our local government, FEMA, the Administrator, the DOD, and all the assets we have here, it is a challenging time, we need to do more, but we will be able to build Puerto Rico stronger than ever before. That is our commitment.

~Ricardo Rossello~

I just wanted to let you know that right now our forces are working so that they can deliver food and water to the people of Puerto Rico, so that diesel and fuel can get to the hospitals.

~Ricardo Rossello~

Now, it is a challenging time. It is a situation without precedent. But with strong leadership, with your continued support, Mr.

~Ricardo Rossello~

President, with the continued support of everybody around this table, the mayors that have played a critical role in this development, our legislature that has been helpful, and all of the assets in government -- I can tell you, Mr. President, that we will not only come out of this, we will stabilize Puerto Rico and we will build it stronger than ever. Thank you so much.

~Donald Trump~

Thank you, Governor. [Applause]

~Ricardo Rossello~

Thank you. God bless.

~Donald Trump~

Well, thank you, everybody. And we're going to make some tours now if anybody has any questions or statements or anything. I know we have a lot of powerful people -- a lot of your heads of your Senate, the heads of your everything.

~Donald Trump~

And it's an honor to work with you folks. And we'll all get it done together.

~Donald Trump~

So I appreciate your support and I know you appreciate our support, because our country has really gone all out to help. And it's not only dangerous, it's expensive, it's everything. But I consider it a great honor, maybe because I know so many people from Puerto Rico that are such great people -- I come from New York.

~Donald Trump~

But we've gone all out and I consider that, again, a great honor. Thank you very much. Thank you. Thank you very much, everybody. Okay. Thank you all. Let's go make a -- let's go see what we have. Let's go.

`;



var exampleOutput =[
  {
    "speaker": "Speaker_1",
    "text": "GOOD morning and welcome to the analog devices third quarter fiscal year two thousand seventeen earnings conference call which is being audio webcast via telephone and over the web I'd like to now introduce your host for today's call Mr Ali Hussein treasurer and head of investor relations Sir the floor is yours",
    "seq": 0
  },
  {
    "speaker": "Speaker_121 ",
    "text": "",
    "seq": 1
  },
  {
    "speaker": "dkdkkd",
    "text": "all right great second Jennifer good morning everybody on the line here thanks for joining the analog devices third quarter twenty seventeen earnings conference call first I like to get through our disclosures note that the information we're about to discuss including our objectives and outlook includes forward can statements actual results may differ materially from these four looking statements as a result of various factors including                those discussed in our earnings release and our most recent ten Q. he's for looking statements reflect our opinion as of the date of the call and we undertake no obligation to update these forward looking statements [Inaudible] in light of new information or future events today's commentary about ADI's third quarter financial results will include non GAAP financial measures when comparing our third quarter results to our historical performance special items are also excluded from the prior quarter and year over year results available reconciliations of these non GAAP measures to their most directly comparable GAAP measures and additional information about our non GAAP measures are included in today's earnings release and our web schedules which we've posted under the quarterly results section at investor.analog dot com our web schedules also included historical view of what the combined ADI and linear tech would have looked like by end market by quarter for the last three years and lastly please note that ADI's first quarter fiscal eighteen will be a fourteen week quarter so you should adjust your models for an additional week of revenue an additional week of expenses for that quarter and so with that I'll turn it over to ADI's CEO Vincent Roche Vince's comments are on a non GAAP basis and excludes special items outlined in today's release so without bench it's all",
    "seq": 2
  },
  {
    "speaker": "Pioe",
    "text": "",
    "seq": 3
  },
  {
    "speaker": "Speaker_104",
    "text": "thanks very much Ali and good morning everyone what was another very successful quarter for ADI and I'm pleased to share our results with you this morning not only were our third quarter financial results stellar we're also making excellent progress in integrating linear tech from an organization on the synergy culture perspective so let's go with our financial results for the third quarter a total revenue was above the high end of guidance one point four six billion dollars primarily on board broad based strength in the highly diverse industrial markets and this strong revenue growth coupled with disciplined operational execution delivered gross margins up seventy point five percent and operating margins of forty point five percent importantly the combined company has generated one point nine billion dollars of adjusted free cash flow over the past twelve months you're the margins of thirty four percent which are among the highest in the S. and P. five hundred to give you some details on our performance by end market during the quarter the industrial market                represented forty nine percent of sales demand across all industrial sectors and regions was strong ADI's industrial business is now nearing three billion dollar annual run rate and we see numerous opportunities to drive additional dollar content on revenue growth as customers increasingly rely on ADI to make their applications more intelligent more connected and more efficient for example in factory automation our software configurable audio solution is making the factory floor more flexible and configurable the value creation opportunities highly compelling customers have the potential to save more than two million dollars per typical installation and factory down time during the line changeover come be reduced by more than eight                weeks as the factory floor further automate ADI's opportunity in the area of robotics doubles with the addition of sensing signal processing power delivery and connectivity a new applications such as in collaborative collaborative robotics expand our available market by run three hundred million over the next five years switching out automotive this market represented sixteen percent of revenue under increase over the prior year ADI dollar content opportunities in a vehicle to date is approximately two hundred and fifty dollars we believe we can more than double risk by twenty twenty five from American megatrends such as autonomous driving I'm the electrification of the power train for all told me autonomous vehicles ADI's seventy seven gigahertz radar solution delivers the highest levels of resolution and sensitivity creasing spatial accuracy by a factor of age quite making the radar three times more in addition the desire to make cars more energy efficient is driving the electrification of a vehicle parked right here ADI's battery management products are three times more accurate than competing solutions enabling more miles per battery charge the communications infrastructure market totaled eighteen percent of sales in the third quarter by application area sequential strength in wireline offset floor wireless sector ADI's portfolio of order some microwave and high speed signal processing coupled with power his own match to breath death with products that span the entire frequency spectrum to a hundred gigahertz and beyond for example our software defined radio transceivers dramatically simplify the base station radio card through aggressive integration and software configuration this solution enables higher channel density reduces our customers time to market today ADI's solutions are pervasive in five G. field trials and we are well positioned to benefit from the wave of five G. deployments that we believe will begin in two thousand and nineteen the consumer market represented seventeen percent of sales in the third quarter increasing both sequentially and year over year across prosumer and portable consumer applications we built a strong consumer franchise that focuses on solving our customers toughest injuring challenges providing them with a high level of differentiation I'm didn't turn driving very strong profitability and free cash flow for ADI so in summary this was an excellent quarter and we                believe that we are better positioned than ever to drive long term profitable growth in free cash flow so with that I'd like to turn the call over to Ali for details of our financial performance in the quarter",
    "seq": 4
  },
  {
    "speaker": "Speaker_121",
    "text": "okay sex that some good morning again everyone before we move to the quarterly results please note that with the exception of non property Spence my comments on the P. and L. line items exclude special items outlined in today's release and our web schedules can be found on the I. R. page okay so as Vince just outlined this was another really solid quarter for ADI with all line items of the P. and L. exceeding the high end of our guidance range on very strong business performance and operational execution so total revenue increased to one point four six billion with a three hundred and ninety three million dollar contribution from linear technology ADI's standalone revenue increased six percent sequentially and twenty three percent over the prior year this reflected strong and broad based demand particularly in the industrial market gross margins in                the third quarter were seventy point five percent above our guidance range primarily on higher industrial revenue mix and cost synergy capture dollars of inventory increased forty million sequentially as we wrapped production to match strong demand but on a days basis inventory was stable around a hundred",
    "seq": 5
  },
  {
    "speaker": "Speaker_121",
    "text": "deferred revenue for shipments in the distribution increased eleven percent sequentially and weeks of inventory in distribution were again at seven weeks which has been very consistent over many many quarters                now operating expenses in the third quarter or four hundred and thirty seven million dollars for thirty percent of revenue and as a result operating margins expanded to forty point five percent which was above the high end of guidance",
    "seq": 6
  },
  {
    "speaker": "Speaker_121",
    "text": "not operating expense in the third quarter was sixty eight million dollars reflecting a full quarter of interest expense of with the financing related to the linear tech acquisition in place our expectation is for non offering Spencer be approximately sixty five million dollars both in the fourth quarter twenty seventeen and in the fourteen week first quarter of twenty eighteen to decrease to fifty five to sixty million dollars per quarter for the remainder of fiscal eighteen our third quarter non GAAP tax rate was ten point eight percent weeks back to our fourth quarter non GAAP tax rate to be approximately ten percent and for it to be approximately fifteen percent and twenty eighteen diluted share count increased to three hundred and seventy one million shares in the third quarter primarily due to the equity consideration relating to the acquisition excluding special items diluted earnings per share in the third quarter of seventeen was a dollar twenty six I've cents above the high end of guidance during the quarter we completed a restructuring of our legal entities related to the linear tech acquisition this resulted in a one time cash payment of seven hundred and fifty million dollars excluding this item ADI generated three hundred and twenty two million dollars of adjusted free cash flow in the quarter and one point nine billion dollars for the combined company on a trailing twelve month basis during the quarter we paid down six hundred million dollars of the debt associated with the linear tech acquisition which helped reduce our net debt to EBITDA ratio to two point nine times we expect to pay down our debt at a rate of approximately a billion dollars per year are planning to do you need to times net debt to EBITDA doll leverage ratio by the first top of fiscal twenty nineteen once we achieved just leverage ratio we plan to reinstitute or reinstate our share buyback program and target and overall cash return to shareholders eighty to a hundred percent after debt service so moving on the fixed asset additions which in the third quarter were sixty four million dollars for the combined company or and are planned to be approximately two                hundred million dollars for fiscal seventeen this is probably a good opportunity to also point out that our model is for capital run at approximately four percent of revenue on an ongoing basis during the quarter we also paid a hundred and sixty six million dollars in dividends and earlier this week our board of directors declared a quarterly cash dividend of forty five cents per outstanding share of common stock payable on September nineteenth to shareholders of record at the close of business on September eighth and that dividend payment not represents eight dollars eighty per share annualize dividend payments okay so with that I'll turn it back over to Vince for outlook for the fourth quarter of seventeen which exclude specializing",
    "seq": 7
  },
  {
    "speaker": "Speaker_104",
    "text": "line in today's release thanks Ali after a strong third quarter we're planning for revenue in the fourth quarter of two thousand seventeen to be in the range of one point four five billion to one point five billion by market we're planning for the industrial and communications infrastructure sectors to be approximately flat sequentially for the automotive and consumer markets to grow from the third quarter levels gross margins are expected to remain stable was approximately seventy point five percent as cost synergies offset the anticipated mix of revenue operating expenses are committed to be down three percent to flat sequentially at the midpoint of this guidance these input translates into an operating expense ratio of approximately twenty nine percent and operating margins of approximately forty two percent in the fourth quarter based on these estimates and excluding special items diluted earnings per share are                planned to be the range of dollar twenty nine to a dollar forty three are you looking saws well we recently announced our new CFO Prashanth my hundred Russia who will be joining us at the end of September I'm really looking forward to push on to rival getting the benefit of a strategic insight strong operational focus as we continue our long term customer I'm sure holder value creation journey we believe that our organization portfolio and customer relationships                have never been in better shape under technology never more essential to an ever more connected and intelligent world our operating model calls for some of the highest margins in our industry and indeed in the S. and P. five hundred operating margins that are in the range of thirty nine to forty five percent of free cash flow margins in the range of thirty four percent to forty two percent and we're only getting started so with that we'll",
    "seq": 8
  },
  {
    "speaker": "Speaker_121",
    "text": "your questions Texas so let's get to our two day session please limit yourself to one question after our initial response will give you an opportunity for a follow up question so operator can we have our first question",
    "seq": 9
  },
  {
    "speaker": "Speaker_1",
    "text": "for those participating by telephone dial and if you have a question please press star any number one on your phone if your question has been answered and you wish to be removed from the queue please press the pound key if you were listening on a speaker phone please pick up the handset one asking your question we'll pause for just a moment to compile the Q. and a",
    "seq": 10
  },
  {
    "speaker": "Speaker_126",
    "text": "our first question comes from tore Svanberg with Stifel",
    "seq": 11
  },
  {
    "speaker": "Speaker_127",
    "text": "yes thank you and congratulations on the strong results my first question is spread it more longer term of for you than                that as we look at ADI opinion Hittite combined can you give us an example song you know how that compares combination you know really strengthens your your barriers to entry I mean I know you are busy working on a new products with that with three combined but if you can give us any insight into you know how that decisions ADI from a competitor perspective that be great",
    "seq": 12
  },
  {
    "speaker": "Speaker_104",
    "text": "yes thank story well you know if you look across the on a log sector we've known all the building blocks of focus solving the toughest challenges that our customers face you know across every of whether it's sensing measuring interpreting powering the signal chains and Bucks to brighten that we've been building for several years and ADI to broaden the book tied to leave or market work space and LTE into power mixed signal space in the building as well independent so to one roof no we can tackle our customers toughestchallenges whether it's in communications infrastructure in autonomous driving our in making our customers installed factory automation and process control machines more intelligent more connected and up you know what period up to broaden that that we convey to our customers that's the brand that our customers are buying and engaging with job across all these different areas so you know we're investing around dollar billion dollars of combined or in the across the three entreprises under one roof so you know we're all the time looking to broaden and deepen our competitive moat and we believe we're in a better position now than ever across all these various markets and with larger customers and with the addition of LTE is world we noted the chance to directly address more medium sized and smaller customers",
    "seq": 13
  },
  {
    "speaker": "Speaker_0",
    "text": "tore you have a follow",
    "seq": 14
  },
  {
    "speaker": "Speaker_127",
    "text": "yeah us so does have a follow up on the communications bucket so obviously that's being you know more mixed here the last few quarters are some that's more related to one of them infrastructure but you mentioned five G. coming online and it seems like maybe it's coming online you know generally spent them and I was thinking so maybe you could elaborate a little bit on you know when you started when you expected start to see more material growth in the communications part of the",
    "seq": 15
  },
  {
    "speaker": "Speaker_104",
    "text": "thank you yeah well the Tory we're laying in the field trials with virtually everybody today in five G. or you my sense is that you know China and perhaps Japan will be first to market with five G. systems under lots of definition for what five G. really means but I think be early systems will be massive marble base more like for the hops you know for how close moving up too much higher frequency over the next five years or so into the well into the gigahertz twenty thirty gigahertz arena so my sense is that you know two thousand nineteen is when we're going to see the first deployment job in Asia in particular and Europe and America a little bit longer I think too Figaro exactly what standards and what free to go to target undead to get into the field trial area",
    "seq": 16
  },
  {
    "speaker": "Speaker_121",
    "text": "Nouriel decide you know from a positioning standpoint ADI's particularly well positioned to benefit from these five G. deployments of you know inherently when you're enabling of more bandwidth you're going to need more radios and that's really where we focus is on the radio so the more radios are out there the better it is for ADI and secondly as you're moving faster to map to faster speeds and and higher standards that you need to move up the frequency spectrum and so with our addition of the Hittite portfolio of you know we're particularly well positioned as we move up the frequency spectrum in areas like microwave and millimeter thanks for your question and will move on to the next caller please",
    "seq": 17
  },
  {
    "speaker": "Speaker_1",
    "text": "our next question is from Harlan sur with JPMorgan",
    "seq": 18
  },
  {
    "speaker": "Speaker_174",
    "text": "morning and solid job on the quarterly execution margin expansion you know in automotive of core ADI think the team is been driving sort of solid year over year growth over the past few quarters and I think combined with linear you visuals sort of mid single digits year over year growth in Q. three then if I look at Q. four right that typically tends to be strong for you guys are guiding for growth but that would imply sort of a range of sort of anywhere from low single digits to mid single digits year over year growth in Q. four just given the momentum did you guys have no rising content a new model deployments I'm sure we anticipate that embedded within your guidance in auto was probably growing kind of more towards that mid single digits year over year growth range",
    "seq": 19
  },
  {
    "speaker": "Speaker_121",
    "text": "okay let me take part of that and maybe for the longer term peace second let Vince out for the job okay so in the quarter our automotive revenues were pretty stable sequentially they were certainly ahead of the guidance range we provided investors with and it really was a tale of two cities in the automotive space or two businesses frankly because                while the ADI's standalone automotive business did in fact decreased in line with seasonality again on a sequential basis the LTC automotive business of recovered very very strongly on a sequential basis I call out because of a recovery in the powertrain sector specifically in China so I think when you look at the tale of those two businesses combined you see a pretty stable third quarter a result on a year over year basis the ADI's standalone revenue did grow in the high single digits but as we point out in the schedule to be provided you it appears to look like a mid single                digit growth rate again it's because the linear tech business that's lower on a year over year basis around this power train business again we're seeing a pretty good recovery not space right now also that's just want to give you a little color and how the quarter turned out terms of the guidance for                next quarter you know all we can tell you Harlan is what we see in the order book in the order book supports of a pretty seasonal fourth quarter of you know so it could be you know your for your basis anywhere from kind of the mid                single digits so high single digit rate you know the one thing I would point out is you know there's obviously been a lot of noise around Saar and we always to look at all that information as well we have access to you know as well as you do and you know I'd be perfectly candid with you to tell you that you know for we are tear to suppliers in the tier one suppliers who supplied OEMs I think many semiconductor companies to drown tells you the sar has a direct impact on                the revenues and frankly very very hard for us to tell all we can tell you is what's in the order book and the order book supports a pretty seasonal quarter in the fourth",
    "seq": 20
  },
  {
    "speaker": "Speaker_0",
    "text": "great and then just a quick follow up",
    "seq": 21
  },
  {
    "speaker": "Speaker_174",
    "text": "same question I had at last quarter which is you know all of the obviously you guys talked about distribution inventory still being very disciplined on lead times you know again looking at some of your peers your peers to be some pop pockets of products that are seen tightness of supply last quarter you guys talked about being very comfortable satisfying customer demand within your normal four to six week lead times I'm just wondering if that's still the",
    "seq": 22
  },
  {
    "speaker": "Speaker_121",
    "text": "yeah I know good question we have to pay a lot of attention to that particularly because it is a customer service on a commitment that we have and so absolutely the lead times have remained very stable at four to six weeks and really not a whole lot of change their you know we do have about three and a half months worth of inventory on our own balance sheet we have seven weeks of inventory and distribution and I'd say those metrics have been very very stable",
    "seq": 23
  },
  {
    "speaker": "Speaker_213",
    "text": "great thanks yes thanks Harlan will move on to the next caller",
    "seq": 24
  },
  {
    "speaker": "Speaker_1",
    "text": "our next question is from Ambrish Srivastava",
    "seq": 25
  },
  {
    "speaker": "Speaker_215",
    "text": "thank you very much using my question is on the linear the creation and looks like customer synergies especially on the margin front or showing up earlier but if I were to pick up something that this to me done live that positive is the free cash flow and and I'm not judging you on a quarterly basis but even if I accept a one time and then as he cash flow margin looks on the north side because you please address",
    "seq": 26
  },
  {
    "speaker": "Speaker_121",
    "text": "yeah no usher and again that's a metric that we look at very very closely as well because you know even though we're a thirty four percent free cash flow margins on the trailing twelve month basis and again that is probably the very high end of the S. and P. five hundred OB I think the combination of these two businesses and and how we think about the future here would suggest that we can really get these free cash flow margins really homing so even though we're account a high into the free cash flow spectrum on the S. and P. five hundred in terms of our free cash flow model we're certainly at the lower end of that which is you know thirty four forty two percent of the range so yeah so I would just point out you know as you mentioned Ambrish the up you know looking at free cash flow in any one quarter is obviously has a lot of puts and takes two and the third quarter tends to be a quarter that's a seasonally weaker quarter for free cash flow generation you know we tend to have a couple of things that that go on in the third quarter to really the comparator last year and I think we were at twenty five percent last year probably around twenty two percent this year and there's a couple of items that are incremental I got this year relative to last in the third quarter one is you know we're obviously in a better business environment and so you know when when you do that you tend to you know build inventory and shipping majority customers or accounts receivable goes up of course all that converts and the cash in the following quarter but in any event you know in in the third quarter we we basically saw use of cash in the India working capital section of the free cash flow statement as a result of really better business conditions of the other itemized point out orders to last year is we are obviously tearing a debt load related to the acquisition and related to that debt load there are to really semi annual payments that we need to make related to debt load one of those payments falls in the third quarter so I think you saw depressed free cash flow number this quarter and it really was kind of perfect storm for casual this quarter but I think over the longer term we're very well positioned to drive our thirty four to forty two percent free cash flow margin",
    "seq": 27
  },
  {
    "speaker": "Speaker_0",
    "text": "range do you have a follow",
    "seq": 28
  },
  {
    "speaker": "Speaker_215",
    "text": "yes I did thank you thank you for that tough for the defense and you address on to question that Harlan our similarly on industrial and on industrial read on have any sar numbers that we can look at and say look sars innovation so your business should be doing this how would you characterize what it what you're seeing in the industrial end market because that is obviously a whole bunch of cross currents there as well",
    "seq": 29
  },
  {
    "speaker": "Speaker_104",
    "text": "yeah I think number should point total of our the executives at our industrial customers over the last several months I'd say there's there's third generally optimism art thing people are pragmatic in terms of but you know the the complex environment but what I will tell you is that there's a general sense that there is you know about her obviously about her economic environment in America in particular for lingo topics and improving I would say the the efficiency of the machinery the installed base so there is what our customers would call a brownfield upgrade in place I think as well you know trying to is on the truck of mass automation what they call trying to twenty twenty five and that's having                a huge effect obviously in our business in China and Japan so up overall thirds other strength across all the various sectors whether it's automation aerospace and defense or on or eighteen and all the geo are are doing well at this point in time and I think there's a good balance sheet between the consumption of our products and on the supply of our products at this point in",
    "seq": 30
  },
  {
    "speaker": "Speaker_213",
    "text": "okay thank you very much next caller please",
    "seq": 31
  },
  {
    "speaker": "Speaker_1",
    "text": "our next question is from Craig Ellis with me right",
    "seq": 32
  },
  {
    "speaker": "Speaker_259",
    "text": "I thank you for taking the question and congratulations on the good execution guys mentioned time wanted to or you're welcome one of the follow up on the comment that you made in your prepared remarks regarding the automotive business and the potential for ADI content to double up from out of the twenty twenty five period is an investor to look ahead to the next one to two years where we're should they expect content to be start increased towards that five hundred dollar level from what is two hundred and fifty now what are the early oz sign posts that they can look to for an increasing content",
    "seq": 33
  },
  {
    "speaker": "Speaker_104",
    "text": "thanks very good question so obviously autonomous driving it all under their very levels of autonomous driving but we're moving steadily toward a car that is using predictive safety more and more so our our radar solutions are doing well today and we've sub we regret crop of new products out the very very high frequency levels with tremendous special accuracy and you know very very high channel called so highly integrated so that's one area where we will get a                lot more penetration obviously were able to attach the power solutions as well all she into those areas all right you know probably between the the radar solution sells the combination with Tina probably doubles the available market bring you go to double the available socket value for ADI like in the radar area we're starting to trial a solid state light our solution that will start to you know hopefully in that period of time over the next five years will start to see some significant contribution in terms of revenue there we've already announced a you know a new new products that it to be for example that move up information or on the car very efficiently in very cost effectively and we've more generations of Dr close and you are very into about coming on the lecture for cation side we build a very attractive sensor portfolio magnetic sensor portfolio for example for controlling movement Matara measuring moving in the car with a lot of touch precision signal processing show those are some examples around the obviously with the on the electrification team as well the addition of these battery controllers is up very exciting to our customers across the globe and you know again there are many ongoing sockets that we've been supplying for many many years in areas like infotainment audio video interface so all those areas you know we're building a very very nice pipeline which gives us tremendous",
    "seq": 34
  },
  {
    "speaker": "Speaker_259",
    "text": "great for that thanks for that list Ali the follow up question is for you appreciate the heads up on the extra week in the fiscal first quarter of next year as a backdrop to back you need just tell us as you look at the combined business what would normal seasonality be for the fiscal",
    "seq": 35
  },
  {
    "speaker": "Speaker_213",
    "text": "quarter with Stalin your tax in the portfolio he I'd always say you know this that's a good question Craig",
    "seq": 36
  },
  {
    "speaker": "Speaker_121",
    "text": "you know I'd say you know the ADI B. to B. markets and the linear tech B. to B. markets probably are pretty similar in terms of how they would behave seasonally we've also by the way put a schedule up on our I. R. page which shows three years worth of data of what the combined company would have looked like by quarter so gross I guess going calculate the seasonality based on that date as well out the way to think about the first quarter as you know generally speaking it's a pretty weak quarter is the January quarter for ADI's not only do we get the December holidays but we also get the January holidays an impact that quarter generally speaking is weaker for industrial and automotive and communications infrastructure as well on the consumer side I think you know I think if you cut back in the fourth quarter guidance that we've given you for consumer your of your growth rate is is down actually so I and I expect that to continue in the first quarter and in the second quarter as well next year but coming back to the point about seasonality in the first quarter because we are expecting an additional week of revenue in the first quarter I just tack and an additional week of revenue additional week of OpEx and then the the second quarter generally you see a recovery in the industrial and automotive markets sequentially all of this time my sense is that recovery will probably be a little build a little bit more muted just simply because you can see additional week in the first quarter and consumer generally sees a bit of a let down from its first quarter levels and then the third and fourth quarter are again                seasonally pretty stable for the B. two B. markets in consumer tends to recover so that's probably the way to think about twenty eighteen and the impact of the extra week in the forty in the fourteen week quarter of one Q. eighteen",
    "seq": 37
  },
  {
    "speaker": "Speaker_0",
    "text": "thanks guys our thanks Craig",
    "seq": 38
  },
  {
    "speaker": "Speaker_1",
    "text": "our next question comes from the backyard thanks America Merrill",
    "seq": 39
  },
  {
    "speaker": "Speaker_305",
    "text": "thanks for taking my question on meditation on the good results as first question on the consumer segment them it's good to see that it's now less than twenty percent of sales but do you think it's at the point where large portable customer has sort of stabilized I'm somewhat on a content basis so we don't have to worry about to any big fluctuations that of content related understand the seasonal swings in consumer but at what point can be you know start to finding normal seasonality and not have to worry about compensating that large",
    "seq": 40
  },
  {
    "speaker": "Speaker_104",
    "text": "yellow as we talk about a TV endlessly there while ago you know we're our sense is that our position in the portable space is strong in the areas that we care about you know obviously be the adoption cycles in the life cycles are shorter than in the areas like industrial for example so we have to you know there's a dynamic there where we have to fight for sockets continuously but I think as we pointed out at the analyst day you know we're expecting a level of stability that lower run rates you know perhaps down in the portable area twenty percent in the coming year that's what we're planning for and we're shooting for obviously there may be upside to that that's how we think about this point in time",
    "seq": 41
  },
  {
    "speaker": "Speaker_121",
    "text": "yeah I just I just add that it's it's obvious we have you know no visibility into what twenty eighteen is going to do in consumer although we do have a good sense our content in these devices is pretty platform specific our sense is that that Mexico week or next year as Vince pointed out frankly were out of the house days well up you know very hard to model that business and so I heard you know estimates from Alice to be down you know that business twenty to thirty                percent our sense about thirty percent is probably a worst case scenario the consumer space for next",
    "seq": 42
  },
  {
    "speaker": "Speaker_305",
    "text": "may helpful and ask my follow up are now that you have a teamviewer drop seventy percent complex kind of gross margin on target what in the next few months still and then on how should we think about the impact of makes versus                utilization versus the cost synergies from here",
    "seq": 43
  },
  {
    "speaker": "Speaker_121",
    "text": "you yeah that's a good question I think the back it's a it's a you know he's seventy point five percent gross margins seventy plus percent gross margins over putting up right now our function of obviously were were pretty well utilized in our fabs given the current business conditions in addition the industrial market is really driving a lot of growth for us right now and that tends to drive pretty solid margins as well in addition we've moved pretty early this quarter to capture some cost synergies on the gross margin line and up that all this he helped as well I think as we look in the next year you know if business conditions remain in there if this if business conditions are led by the industrial market we do have more synergies on the comm on the gross margin line we should do better but again it's all can be very much specific to the environment",
    "seq": 44
  },
  {
    "speaker": "Speaker_305",
    "text": "next year even if consumer decline next year and that should be had from",
    "seq": 45
  },
  {
    "speaker": "Speaker_121",
    "text": "more well I mean I would say you know our margins across all of our business is rushing quite good so I don't expect that to be a big",
    "seq": 46
  },
  {
    "speaker": "Speaker_0",
    "text": "mover thank our",
    "seq": 47
  },
  {
    "speaker": "Speaker_1",
    "text": "question comes from Ross Seymore with Deutsche Bank",
    "seq": 48
  },
  {
    "speaker": "Speaker_337",
    "text": "after question Vince one for you back on the industrial side if if I look at your growth year over year I think the combined mix that you guys talked about has it up twenty seven percent I think your guidance is up kind of twenty twenty five percent year over year and some really impressive but almost so much so that I wonder if there's something company specific going on is that number is really about two X. what your competition is doing in much higher than anything you've done yourself in the last five years so I guess given that with what's driving such strong growth in houses stable do you view that growth",
    "seq": 49
  },
  {
    "speaker": "Speaker_104",
    "text": "you're also think other a number of factors and their response here you know firstly sixteen wasn't a strong year particular on the industrial side of things you know we have a strong play we've made a pivot as a company several years ago we provided or on DM focus into areas like aerospace and defense Hittite obviously is hopeless a loss in the penetration of that space our automation business is strong across the globe we've seen you know China has become a bigger part of what we do in the industrial area sort think those things have helped us a lot of obviously with with LTE focuses world you know the mix of MPs business being skewed towards you know heavily B. two B. applications on particularly industrial that helps everything so I think there are a number of factors that are related to just a stronger markets under ADI his position",
    "seq": 50
  },
  {
    "speaker": "Speaker_121",
    "text": "the market you know and you know I just add to that Ross you know on a year over year basis aerospace and defense and automated test equipment were up very very strongly and so you know we do have the broad base of customers and they certainly done as well as well but we've also got a couple of these more programmatic areas like I just mentioned that really were very strong on a year over year basis and we look at these growth rates as well and say boy this is this is really good growth I would love to keep us going but up our sense is that we from a supply chain perspective the things are pretty stable at least for the things that we can see and I tend to look at the disti child see how that's doing and that's been like clockwork at seven weeks every quarter and did not accomplish quarter so also we can",
    "seq": 51
  },
  {
    "speaker": "Speaker_337",
    "text": "you the stage I guess as my follow up switching over to the linear tech side I believe last quarter you talked about having twenty million out of the original hundred million and OpEx synergies party captured yeah can you give us an update on what you've captured so far and then it's our analyst meeting similar follow up you had added a hundred million with a longer time frame and made a two hundred fifty million dollars synergy target is that hundred million incremental more in the car side or more on the OpEx",
    "seq": 52
  },
  {
    "speaker": "Speaker_121",
    "text": "okay good question so on the initial hundred and fifty million dollars synergies those Ross you point out of the risk twenty million dollars of public company costs that came out and the second quarter when we combine the companies in the third quarter there was an additional twenty million dollars of synergies that we realized and in the fourth quarter guidance and it again all this and better the guidance there's an additional forty five million dollars cost synergy so by the the way to think about is by the end of the fourth quarter or we would have realized eighty five million off the one fifty and all and all that eighty five million displayed on on the panel would be approximately two thirds on the OpEx line about one third of the cost of sales line now there's still an additional sixty five million remaining that we expect to start recognizing rate a belief in the first quarter of eighteen and ending by the fourth quarter of eighteen and the split on that we expect to be about two thirds cost sales and one third of all tax so that's a hundred fifty million dollars locked and loaded we are obviously recognizing realizing those synergies a little softer than we perhaps point to in the past but I'll take it and then the hundred million dollars of additional synergies that we                talked about in the three to five year time frame I would say we've identified those areas think naturally when you put two companies together you're gonna have efficiencies that take place in some of those are earlier some of those are later and you know in the three to five year time frame we've got those synergies identified is just a question of law of communicating into the street and once we have that plan will",
    "seq": 53
  },
  {
    "speaker": "Speaker_0",
    "text": "thank you",
    "seq": 54
  },
  {
    "speaker": "Speaker_1",
    "text": "right next caller our next question comes from Craig Hettenbach with Morgan Stanley",
    "seq": 55
  },
  {
    "speaker": "Speaker_376",
    "text": "yes thanks I want to follow up on your motive side particularly for BMS now that you have to win years business in the house just want to get a sense of just kind of design pipeline and how you view in that market over the intermediate to                longer term",
    "seq": 56
  },
  {
    "speaker": "Speaker_104",
    "text": "the activity Craig over the last couple of years protein in that space has been in China and Asia in general up Thursday another growth of sure to penetrate the market as well in in the U. S. and merging in Europe as well so I would say you                know given the given the pipeline given to the products that we have and given the other penetration that we've gone into some new areas as well I think over the next five years and be a significant growth contributor for",
    "seq": 57
  },
  {
    "speaker": "Speaker_376",
    "text": "got it and then just want to follow up on the CFO I understanding health percent will be starting at the end of September but just maybe just taking a step back in intensity can you shed light on kind of a process that you evaluate                different types of candidates and and why you think he was you know the best fit",
    "seq": 58
  },
  {
    "speaker": "Speaker_104",
    "text": "you so from your first and foremost I was looking for a a very seasoned CFO with understanding of the technology environments and **** up question you know ticks all those boxes he's been in the world technology for for a quarter                century he's a chemical engineer but background so you know I think I mean struck reporters proven that he can run complex financial operations are and you know what I'm looking for somebody to obviously roam the financial operations slowest we make sure that we integrate LTC flow mostly and that was one work with myself some of the leadership team here at ADI to you know look for areas of truck value that we can unlock all in the years ahead so I think as well Prashanth will be up to be a great coach for ADI so you know gross is very excited to have him come on board in the next few weeks and you know I think we have a world class people no coming on board and no we refuse right approach",
    "seq": 59
  },
  {
    "speaker": "Speaker_0",
    "text": "unlock thanks I context all right thanks and we'll get to our last caller",
    "seq": 60
  },
  {
    "speaker": "Speaker_1",
    "text": "our next question is from Amit Daryanani with RBC",
    "seq": 61
  },
  {
    "speaker": "Speaker_401",
    "text": "markets thanks a lot a good morning guys against couple questions me one of the automotive side you guys are guiding for a seasonal recovery or improvement in the upcoming quarter but given the improvement using in the powertrain side on late at linear which is the legal part of the revenue why do you think growth is not better than seasonal trends in the upcoming one on automotive",
    "seq": 62
  },
  {
    "speaker": "Speaker_121",
    "text": "yeah I mean I would just point out you know all we can tell you is what we see in our order book and be order book supports the kind of guidance that we",
    "seq": 63
  },
  {
    "speaker": "Speaker_401",
    "text": "provided did you have a follow up are I do use just on the gross margin side you guys how do you know really impressive upside on gross margins this quarter in July but as a look at the October you guys a kind of guiding flat gross margins despite revenues improving and your potentially new benefit so beyond mix I guess what what I had been that might be that gross",
    "seq": 64
  },
  {
    "speaker": "Speaker_121",
    "text": "over yeah so I think you know I think Vince mentioned it in his prepared remarks we expect our gross in the fourth quarter to be led by the automotive and consumer markets and those two markets tend to Kerry get very good gross margins but they are slightly dilutive to the overall our company and so as a result actually I think it's a great result that we can keep gross margin stable next quarter despite you know the mix organ dissipating mix in the way we're going to do that stuff realize more the cost synergies like we talked about before",
    "seq": 65
  },
  {
    "speaker": "Speaker_213",
    "text": "perfect throughout the quarter guys",
    "seq": 66
  },
  {
    "speaker": "Speaker_121",
    "text": "all righty thank cement so okay so everybody thanks for joining us this morning a copy of this transcript will be available on our website and all available reconciliations and additional information can also be found on the quarterly                results section of our investor relations site at investor.analog dot com so thank you very much for dialing in and have a great Labor Day",
    "seq": 67
  },
  {
    "speaker": "Speaker_126",
    "text": "this concludes today's analog devices conference call you may now disconnect",
    "seq": 68
  }
]

// test('convert plain text with speakers to sequnces json ', () => {
//   expect(parseEditedText(exampleText)).toEqual(exampleOutput);
// });


// console.log(JSON.stringify(parseEditedText(exampleText), null, 2))
// console.log(exampleText);


var result = parseEditedText(exampleText2);
console.log(JSON.stringify(result,null, 2));
console.log("done");

// console.log(result);
