import Image from 'next/image';
import React from 'react';

export default function AboutUsPage() {
  return (
    <div className="py-12">
      <div className="px-6 md:px-10 mx-auto max-w-5xl">
        <h1 className="text-4xl font-bold text-center  mb-8 pb-5">
          Who is Donna Wolf?
        </h1>
        <div className="flex flex-col md:flex-row items-center md:items-start gap-12 mb-12">
          <div className="md:flex-1 md:pr-8 text-center md:text-start">
            <p className="text-lg  leading-relaxed">
              Donna Wolf, a talented violinist and fiddler from Louisville, KY,
              now resides in Memphis, TN, where she continues to share her
              musical talents. She began her classical violin training at age
              10. Now a freelance musician, Donna performs across a variety of
              genres, including Celtic, Bluegrass, Folk, Rock, Christian, and
              Classical.
            </p>
            <div className="bg-gray-500 rounded-lg my-10 h-1 hidden md:block md:w-48" />
            <p className="text-lg  leading-relaxed mt-4">
              Music is her passion! With a wireless setup, she can easily move
              from table to table. Book Donna and let her elegant and fun fiddle
              create a magical atmosphere for your event!
            </p>
          </div>
          <Image
            src="/images/donna_portraits/standing.jpg"
            alt="Donna Wolf"
            className="rounded-lg shadow-lg w-full max-w-xs md:max-w-sm"
            width={500}
            height={500}
            priority
          />
        </div>

        <div className="w-full px-4">
          <div className="mt-8">
            <h2 className="text-3xl font-semibold  mb-4">Performances</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <ul className="list-disc list-inside  space-y-2">
                <li>
                  <strong>Private Event</strong> – with Fred Smith, CEO of
                  FedEx, Pitt Hyde, founder of AutoZone, and Bill Rhodes, CEO of
                  AutoZone
                </li>
                <li>
                  <strong>The Orpheum Theatre</strong> – Featured Performer for
                  “Dinner on Stage,” for the Board of Directors, and for the
                  annual auction events
                </li>
                <li>
                  <strong>Halloran Centre for Performing Arts</strong> – Opened
                  for Peter Cincotti, Betty Lavette, and Jim Brickman
                </li>
                <li>
                  <strong>Regional One Hospital</strong> – Board of Directors
                </li>
                <li>
                  <strong>GPAC</strong> – Featured Performer
                </li>
                <li>
                  <strong>Peabody Hotel</strong> – for the Chez Philippe
                  Restaurant, and in the lobby
                </li>
                <li>
                  <strong>The Madison</strong> – on the sky terrace
                </li>
                <li>
                  <strong>Les Passeess</strong> – Centennial Cabaret Ball Gala,
                  and the Featured Performer for the Stock Exchange
                </li>
              </ul>
              <ul className="list-disc list-inside  space-y-2">
                <li>
                  <strong>Memphis Italian Festival</strong> – Opened for Eli
                  Young, Gin Blossoms
                </li>
                <li>
                  <strong>Minglewood Hall</strong> – Opened for Jimi Jamison for
                  St. Jude Hospital Event
                </li>
                <li>
                  <strong>
                    Spring Market at the Agricenter and Holiday Merchants
                  </strong>{' '}
                  – Featured Performer
                </li>
                <li>
                  <strong>Paducah, KY</strong> – Live on Broadway
                </li>
                <li>
                  <strong>St. Jude Komen Memphis Preview Party</strong> –
                  Featured Performer
                </li>
                <li>
                  <strong>American Heart Association</strong> – Go For Red
                  Featured Performer
                </li>
                <li>
                  <strong>Rock the Ribbon Event</strong> – Featured Performer
                  for Flying Colors Cancer Network Memphis
                </li>
                <li>
                  <strong>Shelby Farms</strong> – Wedding receptions, events,
                  parties and more
                </li>
              </ul>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-12">
            <Image
              src="/images/donna_portraits/red_3.jpg"
              alt="Photo 1"
              className="rounded-lg shadow-lg w-full h-full object-cover"
              width={500}
              height={500}
            />
            <Image
              src="/images/donna_portraits/lights_lookingup_square.jpg"
              alt="Photo 2"
              className="rounded-lg shadow-lg w-full h-full object-cover"
              width={500}
              height={500}
            />
            <Image
              src="/images/donna_portraits/yellow_1.jpg"
              alt="Photo 3"
              className="rounded-lg shadow-lg w-full h-full object-cover"
              width={500}
              height={500}
            />
          </div>

          <div className="mt-8">
            <h2 className="text-3xl font-semibold  mb-4">Locations</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <ul className="list-disc list-inside  space-y-2">
                <li>Spring Creek Ranch Golf Club</li>
                <li>Memphis National Golf Club</li>
                <li>Ridgeway Country Golf Club</li>
                <li>Hi-Tone and Minglewood Hall</li>
                <li>River Arts Festival Memphis</li>
                <li>Italian Festival</li>
                <li>Delta Festival</li>
                <li>Memphis Farmers Market</li>
                <li>Embassy Suites in Little Rock, Arkansas</li>
              </ul>
              <ul className="list-disc list-inside  space-y-2">
                <li>St. Jude Hospital</li>
                <li>Beale Street Performer</li>
                <li>Sun Studios Recording Artist</li>
                <li>Collierville Chamber</li>
                <li>Germantown Chamber</li>
                <li>Madonna Circle</li>
                <li>Special Events and Weddings</li>
                <li>Funerals</li>
                <li>Private Parties</li>
                <li>Assisted Living Facilities</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
