with import (fetchTarball https://github.com/NixOS/nixpkgs/archive/21.11.tar.gz) {};

let
    tcrdd = callPackage (fetchFromGitHub {
    owner = "FaustXVI";
    repo = "tcrdd";
    rev= "06c0259d88a6ed9a15c91e1af5f49b4c9d0181bf";
    sha256 = "JS7NmzfeF5IFPvWPPGAoe/nOB7FPkrJDTwIRKUHcTP8=";
    fetchSubmodules = true;
  }) { nixpkgs = import (fetchTarball https://github.com/NixOS/nixpkgs/archive/21.11.tar.gz) {}; };
in
stdenv.mkDerivation {
  name = "dojo-env";
  buildInputs = [nodejs tcrdd];
}
