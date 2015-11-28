echo 'Setting up server.'
#Get the bash directory
SOURCE="${BASH_SOURCE[0]}"
while [ -h "$SOURCE" ]; do # resolve $SOURCE until the file is no longer a symlink
  DIR="$( cd -P "$( dirname "$SOURCE" )" && pwd )"
  SOURCE="$(readlink "$SOURCE")"
  [[ $SOURCE != /* ]] && SOURCE="$DIR/$SOURCE" # if $SOURCE was a relative symlink, we need to resolve it relative to the path where the symlink file was located
done
DIR="$( cd -P "$( dirname "$SOURCE" )" && pwd )"


#Get important packages
cd /usr/local/src

#Make node
echo 'Making node!'
mkdir node
cd node
wget https://nodejs.org/dist/v4.2.2/node-v4.2.2.tar.gz
tar -xzf node-v4.2.2.tar.gz
cd node-v4.2.2/
./configure
make
sudo make install


#Make watchman
echo 'Making watchman'
cd ../..
git clone https://github.com/facebook/watchman.git
cd watchman
git checkout v4.1.0
./autogen.sh
./configure
make
sudo make install

#Condifigure Inotify watches
echo 'Configuring Inotify watches'
echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf && sudo sysctl -p
echo fs.inotify.max_user_instances=1024 | sudo tee -a /etc/sysctl.conf && sudo sysctl -p

#Install appropriate things
echo 'Setting up server dependencies'
cd $DIR

npm install -g ember-cli
npm install -g bower

npm install
bower install

#And we're done.
echo 'Finished building server dependencies. Run with `ember serve`.'